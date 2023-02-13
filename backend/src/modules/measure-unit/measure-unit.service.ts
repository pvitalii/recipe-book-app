import { CRUDService } from '../../common/crud.service';
import { MeasureUnit } from './interfaces/measure-unit.interface';
import { MeasureUnitModel } from './measure-unit.model';

export class MeasureUnitService extends CRUDService<MeasureUnit> {
  constructor() {
    super(MeasureUnitModel);
  }
}
