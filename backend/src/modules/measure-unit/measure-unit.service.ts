import { CreateMeasureUnitDto } from './dto/create-measure-unit.dto';
import { PutMeasureUnitDto } from './dto/put-measure-unit.dto';
import MeasureUnit from './measure-unit.model';

export class MeasureUnitService {
  async findAll() {
    const measureUnits = await MeasureUnit.find();
    return measureUnits;
  }

  async findById(id: string) {
    const measureUnit = await MeasureUnit.findById(id);
    return measureUnit;
  }

  async createOne(dto: CreateMeasureUnitDto) {
    const newMeasureUnit = await MeasureUnit.create(dto);
    return newMeasureUnit;
  }

  async updateOne(id: string, dto: PutMeasureUnitDto) {
    const updatedMeasureUnit = await MeasureUnit.findByIdAndUpdate(id, dto, { new: true });
    return updatedMeasureUnit;
  }

  async deleteOne(id: string) {
    await MeasureUnit.findByIdAndDelete(id);
  }
}
