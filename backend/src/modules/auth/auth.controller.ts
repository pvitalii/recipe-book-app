import { HydratedDocument } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';
import { boundMethod } from 'autobind-decorator';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService, userServiceInstance } from '../user/user.service';
import { HashService, hashServiceInstance } from './services/hash.service';
import { TokenService, tokenServiceInstance } from './services/token.service';
import { UserSerializer } from '../user/user-serializer';
import { ResetPasswordDto } from '../user/dto/reset-password.dto';
import { ConfirmEmailDto } from '../user/dto/confirm-email.dto';
import { serialize } from '../../common/serialize';

declare global {
  namespace Express {
    interface User extends HydratedDocument<import('../user/interfaces/user.interface').User> {}
  }
}

interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

class AuthController {
  constructor(
    private userService: UserService,
    private hashService: HashService,
    private tokenService: TokenService
  ) {}

  private putTokensIntoCookie(tokens: TokenPair, res: Response) {
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      maxAge: Number(process.env.ACCESS_TOKEN_EXPIRATION)
    });
    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_TOKEN_EXPIRATION)
    });
  }

  @boundMethod
  async registration(req: Request<{}, string, CreateUserDto>, res: Response) {
    req.body.password = await this.hashService.hashPassword(req.body.password);
    const user = await this.userService.createOne(req.body);
    const tokens = await this.tokenService.generateTokensForUser(user);
    this.putTokensIntoCookie(tokens, res);
    return res.json('Successfull registration');
  }

  @boundMethod
  async login(req: Request, res: Response) {
    const tokens = await this.tokenService.generateTokensForUser(req.user!);
    this.putTokensIntoCookie(tokens, res);
    return res.json('Successfull login');
  }

  @boundMethod
  async logout(_req: Request, res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.json('Successfull logout');
  }

  @boundMethod
  async forgotPassword(
    req: Request<{}, { id: string; resetToken: string }, ConfirmEmailDto>,
    res: Response,
    next: NextFunction
  ) {
    const { email } = req.body;
    const user = await this.userService.findUserByEmail(email);
    if (!user) {
      const err = httpErrors.NotFound('User with such email not found');
      return next(err);
    }
    return res.json({
      id: user._id,
      resetToken: await this.tokenService.generateResetToken({ email: user.email, id: user._id })
    });
  }

  @boundMethod
  async resetPassword(
    req: Request<{ id: string; resetToken: string }, UserSerializer, ResetPasswordDto>,
    res: Response,
    next: NextFunction
  ) {
    const { id, resetToken } = req.params;
    const verified = await this.tokenService.verifyResetToken(resetToken);
    if (!verified) {
      const err = httpErrors.BadRequest('Token expired');
      return next(err);
    }
    req.body.password = await this.hashService.hashPassword(req.body.password);
    const updatedUser = await this.userService.updateOne(id, req.body);
    const serializedUser = serialize(UserSerializer, updatedUser);
    return res.json(serializedUser);
  }

  @boundMethod
  async getProfile(req: Request, res: Response) {
    const serializedUser = serialize(UserSerializer, req.user!);
    return res.json(serializedUser);
  }
}

export const authController = new AuthController(
  userServiceInstance,
  hashServiceInstance,
  tokenServiceInstance
);
