import jwt, { SignOptions } from 'jsonwebtoken';
import { HydratedDocument } from 'mongoose';
import { User } from '../../user/interfaces/user.interface';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

export class TokenService {
  private accessTokenOptions: SignOptions = {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION!
  };

  private refreshTokenOptions: SignOptions = {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRATION!
  };

  private resetTokenOptions: SignOptions = {
    expiresIn: process.env.RESET_TOKEN_EXPIRATION!
  };

  private secretKeys = {
    AccessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
    RefreshTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
    ResetTokenSecret: process.env.RESET_TOKEN_SECRET!
  };

  async generateTokenPair(payload: JwtPayload) {
    return {
      accessToken: jwt.sign(payload, this.secretKeys.AccessTokenSecret, this.accessTokenOptions),
      refreshToken: jwt.sign(payload, this.secretKeys.RefreshTokenSecret, this.refreshTokenOptions)
    };
  }

  async verifyAccessToken(token: string) {
    return jwt.verify(token, this.secretKeys.AccessTokenSecret as jwt.Secret);
  }

  async verifyRefreshToken(token: string) {
    return jwt.verify(token, this.secretKeys.RefreshTokenSecret as jwt.Secret);
  }

  async generateTokensForUser(user: HydratedDocument<User>) {
    const { email, id } = user;
    const tokens = await this.generateTokenPair({ email, id });
    return tokens;
  }

  async refreshTokenPair(refreshToken: string) {
    const decoded = (await this.verifyRefreshToken(refreshToken)) as JwtPayload;
    const { email, id } = decoded;
    const tokens = await this.generateTokenPair({ email, id });
    return tokens;
  }

  async generateResetToken(payload: JwtPayload) {
    return jwt.sign(payload, this.secretKeys.ResetTokenSecret, this.resetTokenOptions);
  }

  async verifyResetToken(token: string) {
    return jwt.verify(token, this.secretKeys.ResetTokenSecret as jwt.Secret);
  }
}
