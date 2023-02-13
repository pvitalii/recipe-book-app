import { boundClass } from 'autobind-decorator';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../../common/base.controller';
import { Recipe } from './interfaces/recipe.interface';
import { RecipeService } from './recipe.service';

@boundClass
export class RecipeController extends BaseController<Recipe> {
  constructor(private recipeService = new RecipeService()) {
    super(recipeService);
  }

  override async findAll(_req: Request, res: Response) {
    return res.json(await this.recipeService.findAllAndAggregate());
  }

  override async findById(req: Request<{ id: string }>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const document = await this.recipeService.findByIdAndAggregate(id);
      return res.json(this.existCheck(document));
    } catch (e) {
      next(e);
    }
  }
}
