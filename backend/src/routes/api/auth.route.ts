import { Router } from 'express';
import passport from 'passport';
import { processToken } from '../../middlewares/auth/process-token';
import { bodyValidator } from '../../middlewares/body-validator';
import { AuthController } from '../../modules/auth/auth.controller';
import { ConfirmEmailDto } from '../../modules/user/dto/confirm-email.dto';
import { CreateUserDto } from '../../modules/user/dto/create-user.dto';
import { ResetPasswordDto } from '../../modules/user/dto/reset-password.dto';

export const authRouter = Router();
const authController = new AuthController();

authRouter
  .post('/registration', bodyValidator(CreateUserDto), authController.registration)
  .post('/login', passport.authenticate('local', { session: false }), authController.login)
  .get(
    '/profile',
    processToken,
    passport.authenticate('jwt', { session: false }),
    authController.getProfile
  )
  .delete('/logout', authController.logout)
  .post('/forgot-password', bodyValidator(ConfirmEmailDto), authController.forgotPassword)
  .put(
    '/reset-password/:id/:resetToken',
    bodyValidator(ResetPasswordDto),
    authController.resetPassword
  );
