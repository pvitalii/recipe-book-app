import { Model } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { IngredientModel } from './ingredient.model';
import { Ingredient } from './interfaces/ingredient.interface';

export class IngredientService<T = Ingredient> extends CRUDService<T> {
  constructor(private ingredientModel: Model<T>) {
    super(ingredientModel);
  }
}

export const ingredientServiceInstance = new IngredientService(IngredientModel);
