import { Router } from 'express';
import { RoutePaths } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateRecipeDto } from '../../modules/recipe/dto/create-recipe.dto';
import { PutRecipeDto } from '../../modules/recipe/dto/put-recipe.dto';
import { RecipeController } from '../../modules/recipe/recipe.controller';

export const recipeRouter: Router = Router();
const recipeController = new RecipeController();

recipeRouter
  .get(RoutePaths.FIND_ALL, recipeController.findAll)
  .get(RoutePaths.FIND_BY_ID, recipeController.findById)
  .post('/create-recipe', bodyValidator(CreateRecipeDto), recipeController.createOne)
  .put('/update-recipe/:id', bodyValidator(PutRecipeDto), recipeController.updateOne)
  .delete('/delete-recipe/:id', recipeController.deleteOne);
