import { model, Schema } from 'mongoose';
import { Category } from './interfaces/category.interface';

const categorySchema = new Schema<Category>({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export const CategoryModel = model<Category>('Category', categorySchema);
