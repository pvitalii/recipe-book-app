import { ObjectId } from 'mongoose';

export interface Recipe {
  name: string;
  description: string;
  ingredients: ObjectId[];
  categories: ObjectId[];
}
