import mongoose from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { RecipeAggregation } from './interfaces/recipe-aggregation.interface';
import { Recipe } from './interfaces/recipe.interface';
import { RecipeModel } from './recipe.model';

export class RecipeService extends CRUDService<Recipe> {
  constructor() {
    super(RecipeModel);
  }

  private lookupIngredientsAndCategories = [
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
    }
  ];

  async findAllAndAggregate(): Promise<RecipeAggregation[]> {
    const recipes = await RecipeModel.aggregate<RecipeAggregation>([
      ...this.lookupIngredientsAndCategories,
      {
        $match: {
          'ingredients.productId': new mongoose.Types.ObjectId('63da00570690a62062227716'),
          'categories._id': new mongoose.Types.ObjectId('63da00500690a62062227713')
        }
      }
    ]);
    return recipes;
  }

  async findByIdAndAggregate(id: string) {
    const recipe = await RecipeModel.aggregate<RecipeAggregation>([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id)
        }
      },
      ...this.lookupIngredientsAndCategories
    ]);
    return recipe;
  }
}
