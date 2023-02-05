import { IIdRequestParams, ITypedPutRequest, ITypedRequestBody } from '../../common/types';
import { CreateProductDto } from './dto/create-product.dto';
import { PutProductDto } from './dto/put-product.dto';
import { ProductService } from './product.service';

class ProductController {
  constructor(private productService: ProductService) {}

  async findAllProducts() {
    const products = await this.productService.findAll();
    return products;
  }

  async findProductById(req: IIdRequestParams) {
    const { id } = req.params;
    const product = await this.productService.findById(id);
    return product;
  }

  async createProduct(req: ITypedRequestBody<CreateProductDto>) {
    const newProduct = await this.productService.createOne(req.body);
    return newProduct;
  }

  async updateProduct(req: ITypedPutRequest<PutProductDto>) {
    const { id } = req.params;
    const updatedProduct = await this.productService.updateOne(id, req.body);
    return updatedProduct;
  }

  async deleteProduct(req: IIdRequestParams) {
    const { id } = req.params;
    await this.productService.deleteOne(id);
  }
}

const productController = new ProductController(new ProductService());
export default productController;
