import { model, Schema } from 'mongoose';
import { Product } from './interfaces/product.interface';

export const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export const ProductModel = model<Product>('Product', productSchema);
