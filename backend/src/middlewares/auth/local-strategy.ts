import passport from 'passport';
import passportLocal from 'passport-local';
import { HashService } from '../../modules/auth/services/hash.service';
import { UserService } from '../../modules/user/user.service';

const LocalStrategy = passportLocal.Strategy;
const userServiceInstance = new UserService();
const hashServiceInstance = new HashService();

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
