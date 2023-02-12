import { Model } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { CategoryModel } from './category.model';
import { Category } from './interfaces/category.interface';

export class CategoryService<T = Category> extends CRUDService<T> {
  constructor(private categoryModel: Model<T>) {
    super(categoryModel);
  }
}

export const categoryServiceInstance = new CategoryService(CategoryModel);
