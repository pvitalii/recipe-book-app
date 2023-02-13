import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';
import { TokenService } from '../../modules/auth/services/token.service';

const tokenServiceInstance = new TokenService();

export async function processToken(req: Request, res: Response, next: NextFunction) {
  if (req.cookies.accessToken) return next();
  if (!req.cookies.accessToken && !req.cookies.refreshToken) {
    const err = httpErrors.BadRequest('Tokens expired');
    return next(err);
  }
  const newTokenPair = await tokenServiceInstance.refreshTokenPair(req.cookies.refreshToken);
  req.cookies.accessToken = newTokenPair.accessToken;
  res.cookie('accessToken', newTokenPair.accessToken, {
    httpOnly: true,
    maxAge: Number(process.env.ACCESS_TOKEN_EXPIRATION)
  });
  res.cookie('refreshToken', newTokenPair.refreshToken, {
    httpOnly: true,
    maxAge: Number(process.env.REFRESH_TOKEN_EXPIRATION)
  });
  return next();
}
