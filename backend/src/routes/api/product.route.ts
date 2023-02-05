import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ROUTE_PATHS } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { existValidator } from '../../middlewares/exist-validator';
import { responseHandler } from '../../middlewares/response-handler';
import { CreateProductDto } from '../../modules/product/dto/create-product.dto';
import { PutProductDto } from '../../modules/product/dto/put-product.dto';
import productController from '../../modules/product/product.controller';
import { ProductService } from '../../modules/product/product.service';

const productRouter: Router = Router();
const findProductByIdFucntion = new ProductService().findById;

productRouter.get(
  ROUTE_PATHS.FIND_ALL,
  responseHandler(productController.findAllProducts.bind(productController))
);
productRouter.get(
  ROUTE_PATHS.FIND_BY_ID,
  existValidator(findProductByIdFucntion),
  responseHandler(productController.findProductById.bind(productController))
);
productRouter.post(
  '/create-product',
  bodyValidator(CreateProductDto),
  responseHandler(productController.createProduct.bind(productController), StatusCodes.CREATED)
);
productRouter.put(
  '/update-product/:id',
  existValidator(findProductByIdFucntion),
  bodyValidator(PutProductDto),
  responseHandler(productController.updateProduct.bind(productController))
);
productRouter.delete(
  '/delete-product/:id',
  existValidator(findProductByIdFucntion),
  responseHandler(productController.deleteProduct.bind(productController), StatusCodes.NO_CONTENT)
);

export default productRouter;
