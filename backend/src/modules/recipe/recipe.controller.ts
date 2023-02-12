import { boundClass } from 'autobind-decorator';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../../common/base.controller';
import { RecipeService, recipeServiceInstance } from './recipe.service';

@boundClass
class RecipeController<T> extends BaseController<T> {
  constructor(private recipeService: RecipeService<T>) {
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

export const recipeController = new RecipeController(recipeServiceInstance);
