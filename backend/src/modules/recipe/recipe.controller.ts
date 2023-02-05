import { IIdRequestParams, ITypedPutRequest, ITypedRequestBody } from '../../common/types';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { PutRecipeDto } from './dto/put-recipe.dto';
import { RecipeService } from './recipe.service';

class RecipeController {
  constructor(private recipeService: RecipeService) {}

  async findAllRecipes() {
    const recipes = await this.recipeService.findAll();
    return recipes;
  }

  async findRecipeById(req: IIdRequestParams) {
    const { id } = req.params;
    const recipe = await this.recipeService.findById(id);
    return recipe;
  }

  async createRecipe(req: ITypedRequestBody<CreateRecipeDto>) {
    const newRecipe = await this.recipeService.createOne(req.body);
    return newRecipe;
  }

  async updateRecipe(req: ITypedPutRequest<PutRecipeDto>) {
    const { id } = req.params;
    const updatedRecipe = await this.recipeService.updateOne(id, req.body);
    return updatedRecipe;
  }

  async deleteRecipe(req: IIdRequestParams) {
    const { id } = req.params;
    await this.recipeService.deleteOne(id);
  }
}

const recipeController = new RecipeController(new RecipeService());
export default recipeController;
