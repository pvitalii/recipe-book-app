import { IIdRequestParams, ITypedPutRequest, ITypedRequestBody } from '../../common/types';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PutCategoryDto } from './dto/put-category.dto';

class CategoryController {
  constructor(private categoryService: CategoryService) {}

  async findAllCategories() {
    const categories = await this.categoryService.findAll();
    return categories;
  }

  async findCategoryById(req: IIdRequestParams) {
    const { id } = req.params;
    const category = await this.categoryService.findById(id);
    return category;
  }

  async createCategory(req: ITypedRequestBody<CreateCategoryDto>) {
    const category = await this.categoryService.createOne(req.body);
    return category;
  }

  async updateCategory(req: ITypedPutRequest<PutCategoryDto>) {
    const { id } = req.params;
    const updatedCategory = await this.categoryService.updateOne(id, req.body);
    return updatedCategory;
  }

  async deleteCategory(req: IIdRequestParams) {
    const { id } = req.params;
    await this.categoryService.deleteOne(id);
  }
}

const categoryController = new CategoryController(new CategoryService());
export default categoryController;
