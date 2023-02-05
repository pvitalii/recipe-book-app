import { model, Schema } from 'mongoose';
import { IProduct } from './product.types';

export const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Product = model<IProduct>('Product', productSchema);

export default Product;
