import mongoose from 'mongoose';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { PutRecipeDto } from './dto/put-recipe.dto';
import Recipe from './recipe.model';
import { IRecipeAggregation } from './recipe.types';

export class RecipeService {
  async findAll() {
    const recipes = await Recipe.aggregate<IRecipeAggregation>([
      {
        $lookup: {
          from: 'ingredients',
          localField: 'ingredients',
          foreignField: '_id',
          as: 'ingredients'
        }
      },
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: '_id',
          as: 'categories'
        }
      },
      {
        $match: {
          'ingredients.productId': new mongoose.Types.ObjectId('63da00570690a62062227716'),
          'categories._id': new mongoose.Types.ObjectId('63da00500690a62062227713')
        }
      }
    ]);
    return recipes;
  }

  async findById(id: string) {
    const recipe = await Recipe.findById(id).populate('ingredients').populate('categories');
    return recipe;
  }

  async createOne(dto: CreateRecipeDto) {
    const newRecipe = await Recipe.create(dto);
    return newRecipe;
  }

  async updateOne(id: string, dto: PutRecipeDto) {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, dto, { new: true });
    return updatedRecipe;
  }

  async deleteOne(id: string) {
    await Recipe.findByIdAndDelete(id);
  }
}
