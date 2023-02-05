import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { PutIngredientDto } from './dto/put-ingredient.dto';
import Ingredient from './ingredient.model';

export class IngredientService {
  async findAll() {
    const ingredients = await Ingredient.find().populate('measureUnitId').populate('productId');
    return ingredients;
  }

  async findById(id: string) {
    const ingredient = await Ingredient.findById(id);
    return ingredient;
  }

  async createOne(dto: CreateIngredientDto) {
    const newIngredient = await Ingredient.create(dto);
    return newIngredient;
  }

  async updateOne(id: string, dto: PutIngredientDto) {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(id, dto, { new: true });
    return updatedIngredient;
  }

  async deleteOne(id: string) {
    await Ingredient.findByIdAndDelete(id);
  }
}
