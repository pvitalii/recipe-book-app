import bcrypt from 'bcryptjs';

export class HashService {
  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, process.env.BCRYPT_SALT!);
  }

  async comparePasswords(hashedPassword: string, password: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
