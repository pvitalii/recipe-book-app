import passport from 'passport';
import passportLocal from 'passport-local';
import { hashServiceInstance } from '../../modules/auth/services/hash.service';
import { userServiceInstance } from '../../modules/user/user.service';

const LocalStrategy = passportLocal.Strategy;

async function validateUserByEmail(email: string, password: string) {
  const user = await userServiceInstance.findUserByEmail(email);
  if (!user) {
    return null;
  }
  const isPasswordCorrect = await hashServiceInstance.comparePasswords(user.password, password);
  if (isPasswordCorrect) {
    return user;
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    async (email, password, done) => {
      const user = await validateUserByEmail(email, password);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    }
  )
);
