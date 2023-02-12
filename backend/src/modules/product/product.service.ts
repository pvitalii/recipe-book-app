import { Model } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { Product } from './interfaces/product.interface';
import { ProductModel } from './product.model';

export class ProductService<T = Product> extends CRUDService<T> {
  constructor(private productModel: Model<T>) {
    super(productModel);
  }
}

export const productServiceInstance = new ProductService(ProductModel);
