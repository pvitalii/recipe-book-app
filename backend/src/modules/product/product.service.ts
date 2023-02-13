import { CRUDService } from '../../common/crud.service';
import { Product } from './interfaces/product.interface';
import { ProductModel } from './product.model';

export class ProductService extends CRUDService<Product> {
  constructor() {
    super(ProductModel);
  }
}
