import Category from './category.model';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PutCategoryDto } from './dto/put-category.dto';

export class CategoryService {
  async findAll() {
    const categories = await Category.find();
    return categories;
  }

  async findById(id: string) {
    const category = await Category.findById(id);
    return category;
  }

  async createOne(dto: CreateCategoryDto) {
    const newCategory = await Category.create(dto);
    return newCategory;
  }

  async updateOne(id: string, dto: PutCategoryDto) {
    const updatedCategory = await Category.findByIdAndUpdate(id, dto, { new: true });
    return updatedCategory;
  }

  async deleteOne(id: string) {
    await Category.findByIdAndDelete(id);
  }
}
