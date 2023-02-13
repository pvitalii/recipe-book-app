import { Router } from 'express';
import { processToken } from '../middlewares/auth/process-token';
import { authRouter } from './api/auth.route';
import { categoryRouter } from './api/category.route';
import { ingredientRouter } from './api/ingredient.route';
import { measureUnitRouter } from './api/measure-unit.route';
import { productRouter } from './api/product.route';
import { recipeRouter } from './api/recipe.route';

export const appRouter = Router();

appRouter
  .use('/auth', authRouter)
  .use(processToken)
  .use('/recipe', recipeRouter)
  .use('/product', productRouter)
  .use('/category', categoryRouter)
  .use('/measure-unit', measureUnitRouter)
  .use('/ingredient', ingredientRouter);
