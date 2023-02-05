import { IIdRequestParams, ITypedPutRequest, ITypedRequestBody } from '../../common/types';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { PutIngredientDto } from './dto/put-ingredient.dto';
import { IngredientService } from './ingredient.service';

class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  async findAllIngredients() {
    const ingredients = await this.ingredientService.findAll();
    return ingredients;
  }

  async findIngredientById(req: IIdRequestParams) {
    const { id } = req.params;
    const ingredient = await this.ingredientService.findById(id);
    return ingredient;
  }

  async createIngredient(req: ITypedRequestBody<CreateIngredientDto>) {
    const newIngredient = await this.ingredientService.createOne(req.body);
    return newIngredient;
  }

  async updateIngredient(req: ITypedPutRequest<PutIngredientDto>) {
    const { id } = req.params;
    const updatedIngredient = await this.ingredientService.updateOne(id, req.body);
    return updatedIngredient;
  }

  async deleteIngredient(req: IIdRequestParams) {
    const { id } = req.params;
    await this.ingredientService.deleteOne(id);
  }
}

const ingredientController = new IngredientController(new IngredientService());
export default ingredientController;
