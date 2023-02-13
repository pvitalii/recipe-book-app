import { Category } from '../../category/interfaces/category.interface';
import { Ingredient } from '../../ingredient/interfaces/ingredient.interface';
import { Recipe } from './recipe.interface';

export interface RecipeAggregation extends Omit<Recipe, 'ingredients' | 'categories'> {
  ingredients: Ingredient[];
  categories: Category[];
}
