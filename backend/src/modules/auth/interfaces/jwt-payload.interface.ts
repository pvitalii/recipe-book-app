import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export interface JwtPayload extends jwt.JwtPayload {
  id: Types.ObjectId;
  email: string;
}
