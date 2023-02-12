import passport from 'passport';
import passportJwt, { ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../../modules/auth/interfaces/jwt-payload.interface';
import { userServiceInstance } from '../../modules/user/user.service';

const JwtStrategy = passportJwt.Strategy;

function cookieExtractor(req: Request) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies.accessToken;
  }
  return token;
}

const JwtStrategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  ignoreExpiration: false,
  secretOrKey: process.env.ACCESS_TOKEN_SECRET!
};

passport.use(
  new JwtStrategy(JwtStrategyOptions, async (payload: JwtPayload, done) => {
    const user = await userServiceInstance.findUserByEmail(payload.email);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  })
);
