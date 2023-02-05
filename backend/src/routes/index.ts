import { Application } from 'express';
import { ROUTE_PATHS } from '../common/consts';
import categoryRouter from './api/category.route';
import ingredientRouter from './api/ingredient.route';
import measureUnitRouter from './api/measure-unit.route';
import productRouter from './api/product.route';
import recipeRouter from './api/recipe.route';

export class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use(`${ROUTE_PATHS.BASE}/recipe`, recipeRouter);
    this.app.use(`${ROUTE_PATHS.BASE}/product`, productRouter);
    this.app.use(`${ROUTE_PATHS.BASE}/category`, categoryRouter);
    this.app.use(`${ROUTE_PATHS.BASE}/measure-unit`, measureUnitRouter);
    this.app.use(`${ROUTE_PATHS.BASE}/ingredient`, ingredientRouter);
  }
}
