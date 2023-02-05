import { model, Schema } from 'mongoose';
import { IRecipe } from './recipe.types';

const recipeSchema = new Schema({
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

const Recipe = model<IRecipe>('Recipe', recipeSchema);

export default Recipe;
