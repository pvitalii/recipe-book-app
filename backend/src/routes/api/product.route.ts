import { Router } from 'express';
import { RoutePaths } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateProductDto } from '../../modules/product/dto/create-product.dto';
import { PutProductDto } from '../../modules/product/dto/put-product.dto';
import { productController } from '../../modules/product/product.controller';

export const productRouter: Router = Router();

productRouter
  .get(RoutePaths.FIND_ALL, productController.findAll)
  .get(RoutePaths.FIND_BY_ID, productController.findById)
  .post('/create-product', bodyValidator(CreateProductDto), productController.createOne)
  .put('/update-product/:id', bodyValidator(PutProductDto), productController.updateOne)
  .delete('/delete-product/:id', productController.deleteOne);
