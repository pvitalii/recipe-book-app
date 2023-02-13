import { BaseController } from '../../common/base.controller';
import { CategoryService } from './category.service';
import { Category } from './interfaces/category.interface';

export class CategoryController extends BaseController<Category> {
  constructor(private categoryService = new CategoryService()) {
    super(categoryService);
  }
}
