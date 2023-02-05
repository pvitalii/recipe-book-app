import { model, Schema } from 'mongoose';
import { ICategory } from './category.types';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Category = model<ICategory>('Category', categorySchema);

export default Category;
