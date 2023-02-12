import { HydratedDocument, Model } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { User } from './interfaces/user.interface';
import { UserModel } from './user.model';

export class UserService<T = User> extends CRUDService<T> {
  constructor(private userModel: Model<T>) {
    super(userModel);
  }

  async findUserByEmail(email: string): Promise<HydratedDocument<T> | null> {
    return this.userModel.findOne({ email });
  }
}

export const userServiceInstance = new UserService(UserModel);
