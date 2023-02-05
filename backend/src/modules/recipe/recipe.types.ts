import { Document, ObjectId } from 'mongoose';
import { ICategory } from '../category/category.types';
import { IIngredient } from '../ingredient/ingredient.types';

export interface IRecipe extends Document {
  name: string;
  description: string;
  ingredients: ObjectId[];
  categories: ObjectId[];
}

export interface IRecipeAggregation extends Omit<IRecipe, 'ingredients' | 'categories'> {
  ingredients: IIngredient[];
  categories: ICategory[];
}
