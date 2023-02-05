import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ROUTE_PATHS } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { existValidator } from '../../middlewares/exist-validator';
import { responseHandler } from '../../middlewares/response-handler';
import { CreateRecipeDto } from '../../modules/recipe/dto/create-recipe.dto';
import { PutRecipeDto } from '../../modules/recipe/dto/put-recipe.dto';
import recipeController from '../../modules/recipe/recipe.controller';
import { RecipeService } from '../../modules/recipe/recipe.service';

const recipeRouter: Router = Router();
const findRecipeByIdFunction = new RecipeService().findById;

recipeRouter.get(
  ROUTE_PATHS.FIND_ALL,
  responseHandler(recipeController.findAllRecipes.bind(recipeController))
);
recipeRouter.get(
  ROUTE_PATHS.FIND_BY_ID,
  existValidator(findRecipeByIdFunction),
  responseHandler(recipeController.findRecipeById.bind(recipeController))
);
recipeRouter.post(
  '/create-recipe',
  bodyValidator(CreateRecipeDto),
  responseHandler(recipeController.createRecipe.bind(recipeController), StatusCodes.CREATED)
);
recipeRouter.put(
  '/update-recipe/:id',
  existValidator(findRecipeByIdFunction),
  bodyValidator(PutRecipeDto),
  responseHandler(recipeController.updateRecipe.bind(recipeController))
);
recipeRouter.delete(
  '/delete-recipe/:id',
  existValidator(findRecipeByIdFunction),
  responseHandler(recipeController.deleteRecipe.bind(recipeController), StatusCodes.NO_CONTENT)
);

export default recipeRouter;
