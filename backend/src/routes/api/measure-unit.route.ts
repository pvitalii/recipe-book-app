import { Router } from 'express';
import { RoutePaths } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { CreateMeasureUnitDto } from '../../modules/measure-unit/dto/create-measure-unit.dto';
import { PutMeasureUnitDto } from '../../modules/measure-unit/dto/put-measure-unit.dto';
import { MeasureUnitController } from '../../modules/measure-unit/measure-unit.controller';

export const measureUnitRouter: Router = Router();
const measureUnitController = new MeasureUnitController();

measureUnitRouter
  .get(RoutePaths.FIND_ALL, measureUnitController.findAll)
  .get(RoutePaths.FIND_BY_ID, measureUnitController.findById)
  .post(
    '/create-measure-unit',
    bodyValidator(CreateMeasureUnitDto),
    measureUnitController.createOne
  )
  .put(
    '/update-measure-unit/:id',
    bodyValidator(PutMeasureUnitDto),
    measureUnitController.updateOne
  )
  .delete('/delete-measure-unit/:id', measureUnitController.deleteOne);
