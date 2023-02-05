import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ROUTE_PATHS } from '../../common/consts';
import { bodyValidator } from '../../middlewares/body-validator';
import { existValidator } from '../../middlewares/exist-validator';
import { responseHandler } from '../../middlewares/response-handler';
import { CreateMeasureUnitDto } from '../../modules/measure-unit/dto/create-measure-unit.dto';
import { PutMeasureUnitDto } from '../../modules/measure-unit/dto/put-measure-unit.dto';
import measureUnitController from '../../modules/measure-unit/measure-unit.controller';
import { MeasureUnitService } from '../../modules/measure-unit/measure-unit.service';

const measureUnitRouter: Router = Router();
const findMeasureUnitByIdFunction = new MeasureUnitService().findById;

measureUnitRouter.get(
  ROUTE_PATHS.FIND_ALL,
  responseHandler(measureUnitController.findAllMeasureUnits.bind(measureUnitController))
);
measureUnitRouter.get(
  ROUTE_PATHS.FIND_BY_ID,
  existValidator(findMeasureUnitByIdFunction),
  responseHandler(measureUnitController.findByIdMeasureUnit.bind(measureUnitController))
);
measureUnitRouter.post(
  '/create-measure-unit',
  bodyValidator(CreateMeasureUnitDto),
  responseHandler(
    measureUnitController.createMeasureUnit.bind(measureUnitController),
    StatusCodes.CREATED
  )
);
measureUnitRouter.put(
  '/update-measure-unit/:id',
  existValidator(findMeasureUnitByIdFunction),
  bodyValidator(PutMeasureUnitDto),
  responseHandler(measureUnitController.updateMeasureUnit.bind(measureUnitController))
);
measureUnitRouter.delete(
  '/delete-measure-unit/:id',
  existValidator(findMeasureUnitByIdFunction),
  responseHandler(
    measureUnitController.deleteMeasureUnit.bind(measureUnitController),
    StatusCodes.NO_CONTENT
  )
);

export default measureUnitRouter;
