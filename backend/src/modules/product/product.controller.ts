import { BaseController } from '../../common/base.controller';
import { Product } from './interfaces/product.interface';
import { ProductService } from './product.service';

export class ProductController extends BaseController<Product> {
  constructor(private productService = new ProductService()) {
    super(productService);
  }
}
