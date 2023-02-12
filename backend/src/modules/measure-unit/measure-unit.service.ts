import { Model } from 'mongoose';
import { CRUDService } from '../../common/crud.service';
import { MeasureUnit } from './interfaces/measure-unit.interface';
import { MeasureUnitModel } from './measure-unit.model';

export class MeasureUnitService<T = MeasureUnit> extends CRUDService<T> {
  constructor(private measureUnitModel: Model<T>) {
    super(measureUnitModel);
  }
}

export const measureUnitServiceInstance = new MeasureUnitService(MeasureUnitModel);
