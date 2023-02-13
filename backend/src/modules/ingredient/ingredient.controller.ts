import { BaseController } from '../../common/base.controller';
import { IngredientService } from './ingredient.service';
import { Ingredient } from './interfaces/ingredient.interface';

export class IngredientController extends BaseController<Ingredient> {
  constructor(private ingredientService = new IngredientService()) {
    super(ingredientService);
  }
}
