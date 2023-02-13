import { model, Schema } from 'mongoose';
import { Ingredient } from './interfaces/ingredient.interface';

const ingredientSchema = new Schema<Ingredient>({
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

export const IngredientModel = model<Ingredient>('Ingredient', ingredientSchema);
