import { model, Schema } from 'mongoose';
import { MeasureUnit } from './interfaces/measure-unit.interface';

const measureUnitSchema = new Schema<MeasureUnit>({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

export const MeasureUnitModel = model<MeasureUnit>('MeasureUnit', measureUnitSchema);
