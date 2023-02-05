import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ROUTE_PATHS } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { existValidator } from '../../middlewares/exist-validator';
import { responseHandler } from '../../middlewares/response-handler';
import { CreateIngredientDto } from '../../modules/ingredient/dto/create-ingredient.dto';
import { PutIngredientDto } from '../../modules/ingredient/dto/put-ingredient.dto';
import ingredientController from '../../modules/ingredient/ingredient.controller';
import { IngredientService } from '../../modules/ingredient/ingredient.service';

const ingredientRouter: Router = Router();
const findIngredientByIdFunction = new IngredientService().findById;

ingredientRouter.get(
  ROUTE_PATHS.FIND_ALL,
  responseHandler(ingredientController.findAllIngredients.bind(ingredientController))
);
ingredientRouter.get(
  ROUTE_PATHS.FIND_BY_ID,
  existValidator(findIngredientByIdFunction),
  responseHandler(ingredientController.findIngredientById.bind(ingredientController))
);
ingredientRouter.post(
  '/create-ingredient',
  bodyValidator(CreateIngredientDto),
  responseHandler(
    ingredientController.createIngredient.bind(ingredientController),
    StatusCodes.CREATED
  )
);
ingredientRouter.put(
  '/update-ingredient/:id',
  existValidator(findIngredientByIdFunction),
  bodyValidator(PutIngredientDto),
  responseHandler(ingredientController.updateIngredient.bind(ingredientController))
);
ingredientRouter.delete(
  '/delete-ingredient/:id',
  existValidator(findIngredientByIdFunction),
  responseHandler(
    ingredientController.deleteIngredient.bind(ingredientController),
    StatusCodes.NO_CONTENT
  )
);

export default ingredientRouter;
