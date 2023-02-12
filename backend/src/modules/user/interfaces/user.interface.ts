import { ObjectId } from 'mongoose';

export interface User {
  email: string;
  password: string;
  favourites: ObjectId[];
  role: 'user' | 'admin';
}
