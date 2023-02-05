import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ROUTE_PATHS } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { existValidator } from '../../middlewares/exist-validator';
import { responseHandler } from '../../middlewares/response-handler';
import categoryController from '../../modules/category/category.controller';
import { CategoryService } from '../../modules/category/category.service';
import { CreateCategoryDto } from '../../modules/category/dto/create-category.dto';
import { PutCategoryDto } from '../../modules/category/dto/put-category.dto';

const categoryRouter: Router = Router();
const findCategoryByIdFunction = new CategoryService().findById;

categoryRouter.get(
  ROUTE_PATHS.FIND_ALL,
  responseHandler(categoryController.findAllCategories.bind(categoryController))
);
categoryRouter.get(
  ROUTE_PATHS.FIND_BY_ID,
  existValidator(findCategoryByIdFunction),
  responseHandler(categoryController.findCategoryById.bind(categoryController))
);
categoryRouter.post(
  '/create-category',
  bodyValidator(CreateCategoryDto),
  responseHandler(categoryController.createCategory.bind(categoryController), StatusCodes.CREATED)
);
categoryRouter.put(
  '/update-category/:id',
  existValidator(findCategoryByIdFunction),
  bodyValidator(PutCategoryDto),
  responseHandler(categoryController.updateCategory.bind(categoryController))
);
categoryRouter.delete(
  '/delete-category/:id',
  existValidator(findCategoryByIdFunction),
  responseHandler(
    categoryController.deleteCategory.bind(categoryController),
    StatusCodes.NO_CONTENT
  )
);

export default categoryRouter;
