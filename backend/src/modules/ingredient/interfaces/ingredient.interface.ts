import { ObjectId } from 'mongoose';

export interface Ingredient {
  quantity: string;
  measureUnitId: ObjectId;
  productId: ObjectId;
}
