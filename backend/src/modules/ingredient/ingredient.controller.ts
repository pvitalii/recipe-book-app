import { BaseController } from '../../common/base.controller';
import { IngredientService, ingredientServiceInstance } from './ingredient.service';

class IngredientController<T> extends BaseController<T> {
  constructor(private ingredientService: IngredientService<T>) {
    super(ingredientService);
  }
}

export const ingredientController = new IngredientController(ingredientServiceInstance);
