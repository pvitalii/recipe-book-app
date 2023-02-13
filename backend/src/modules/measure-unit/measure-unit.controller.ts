import { BaseController } from '../../common/base.controller';
import { MeasureUnit } from './interfaces/measure-unit.interface';
import { MeasureUnitService } from './measure-unit.service';

export class MeasureUnitController extends BaseController<MeasureUnit> {
  constructor(private measureUnitService = new MeasureUnitService()) {
    super(measureUnitService);
  }
}
