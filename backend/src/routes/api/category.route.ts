import { Router } from 'express';
import { RoutePaths } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { CategoryController } from '../../modules/category/category.controller';
import { CreateCategoryDto } from '../../modules/category/dto/create-category.dto';
import { PutCategoryDto } from '../../modules/category/dto/put-category.dto';

export const categoryRouter: Router = Router();
const categoryController = new CategoryController();

categoryRouter
  .get(RoutePaths.FIND_ALL, categoryController.findAll)
  .get(RoutePaths.FIND_BY_ID, categoryController.findById)
  .post('/create-category', bodyValidator(CreateCategoryDto), categoryController.createOne)
  .put('/update-category/:id', bodyValidator(PutCategoryDto), categoryController.updateOne)
  .delete('/delete-category/:id', categoryController.deleteOne);
