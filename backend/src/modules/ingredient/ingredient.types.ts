import { Document, ObjectId } from 'mongoose';

export interface IIngredient extends Document {
  quantity: string;
  measureUnitId: ObjectId;
  productId: ObjectId;
}
