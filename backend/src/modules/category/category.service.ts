import { CRUDService } from '../../common/crud.service';
import { CategoryModel } from './category.model';
import { Category } from './interfaces/category.interface';

export class CategoryService extends CRUDService<Category> {
  constructor() {
    super(CategoryModel);
  }
}
