import { BaseController } from '../../common/base.controller';
import { ProductService, productServiceInstance } from './product.service';

class ProductController<T> extends BaseController<T> {
  constructor(private productService: ProductService<T>) {
    super(productService);
  }
}

export const productController = new ProductController(productServiceInstance);
