import { model, Schema } from 'mongoose';
import { Recipe } from './interfaces/recipe.interface';

const recipeSchema = new Schema<Recipe>({
  name: {
    type: String,
    required: true,
    unique: true
  },

  description: {
    type: String,
    required: true,
    unique: true
  },

  ingredients: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    required: true
  },

  categories: {
    type: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    required: true
  }
});

export const RecipeModel = model<Recipe>('Recipe', recipeSchema);
