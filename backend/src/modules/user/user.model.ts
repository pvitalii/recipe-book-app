import { model, Schema } from 'mongoose';
import { User } from './interfaces/user.interface';

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  favourites: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
    default: []
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }
});

export const UserModel = model<User>('User', userSchema);
