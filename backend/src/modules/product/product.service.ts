import { CreateProductDto } from './dto/create-product.dto';
import { PutProductDto } from './dto/put-product.dto';
import Product from './product.model';

export class ProductService {
  async findAll() {
    const products = await Product.find();
    return products;
  }

  async findById(id: string) {
    const product = await Product.findById(id);
    return product;
  }

  async createOne(dto: CreateProductDto) {
    const product = await Product.create(dto);
    return product;
  }

  async updateOne(id: string, dto: PutProductDto) {
    const updatedProduct = await Product.findByIdAndUpdate(id, dto, { new: true });
    return updatedProduct;
  }

  async deleteOne(id: string) {
    await Product.findByIdAndDelete(id);
  }
}
