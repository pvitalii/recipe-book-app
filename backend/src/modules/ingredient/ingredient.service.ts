import { CRUDService } from '../../common/crud.service';
import { IngredientModel } from './ingredient.model';
import { Ingredient } from './interfaces/ingredient.interface';

export class IngredientService extends CRUDService<Ingredient> {
  constructor() {
    super(IngredientModel);
  }
}
