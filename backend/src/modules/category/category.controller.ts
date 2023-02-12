import { BaseController } from '../../common/base.controller';
import { categoryServiceInstance, CategoryService } from './category.service';

class CategoryController<T> extends BaseController<T> {
  constructor(private categoryService: CategoryService<T>) {
    super(categoryService);
  }
}

export const categoryController = new CategoryController(categoryServiceInstance);
