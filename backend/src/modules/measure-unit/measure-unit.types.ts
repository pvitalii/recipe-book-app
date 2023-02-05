import { Document } from 'mongoose';

export interface IMeasureUnit extends Document {
  name: string;
}
