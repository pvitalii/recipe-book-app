import { model, Schema } from 'mongoose';
import { IIngredient } from './ingredient.types';

const ingredientSchema = new Schema({
  quantity: {
    type: String,
    required: true
  },

  measureUnitId: {
    type: Schema.Types.ObjectId,
    ref: 'MeasureUnit'
  },

  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
});

const Ingredient = model<IIngredient>('Ingredient', ingredientSchema);

export default Ingredient;
