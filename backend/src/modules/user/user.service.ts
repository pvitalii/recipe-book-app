import { HydratedDocument } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { User } from './interfaces/user.interface';
import { UserModel } from './user.model';

export class UserService extends CRUDService<User> {
  constructor() {
    super(UserModel);
  }

  async findUserByEmail(email: string): Promise<HydratedDocument<User> | null> {
    return UserModel.findOne({ email });
  }
}
