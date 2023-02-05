import { model, Schema } from 'mongoose';
import { IMeasureUnit } from './measure-unit.types';

const measureUnitSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const MeasureUnit = model<IMeasureUnit>('MeasureUnit', measureUnitSchema);

export default MeasureUnit;
