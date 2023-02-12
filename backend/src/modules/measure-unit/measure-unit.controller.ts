import { BaseController } from '../../common/base.controller';
import { MeasureUnitService, measureUnitServiceInstance } from './measure-unit.service';

class MeasureUnitController<T> extends BaseController<T> {
  constructor(private measureUnitService: MeasureUnitService<T>) {
    super(measureUnitService);
  }
}

export const measureUnitController = new MeasureUnitController(measureUnitServiceInstance);
