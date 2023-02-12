import { Router } from 'express';
import { RoutePaths } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateIngredientDto } from '../../modules/ingredient/dto/create-ingredient.dto';
import { PutIngredientDto } from '../../modules/ingredient/dto/put-ingredient.dto';
import { ingredientController } from '../../modules/ingredient/ingredient.controller';

export const ingredientRouter: Router = Router();

ingredientRouter
  .get(RoutePaths.FIND_ALL, ingredientController.findAll)
  .get(RoutePaths.FIND_BY_ID, ingredientController.findById)
  .post('/create-ingredient', bodyValidator(CreateIngredientDto), ingredientController.createOne)
  .put('/update-ingredient/:id', bodyValidator(PutIngredientDto), ingredientController.updateOne)
  .delete('/delete-ingredient/:id', ingredientController.deleteOne);
