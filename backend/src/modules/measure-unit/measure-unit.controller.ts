import { IIdRequestParams, ITypedPutRequest, ITypedRequestBody } from '../../common/types';
import { CreateMeasureUnitDto } from './dto/create-measure-unit.dto';
import { PutMeasureUnitDto } from './dto/put-measure-unit.dto';
import { MeasureUnitService } from './measure-unit.service';

class MeasureUnitController {
  constructor(private measureUnitService: MeasureUnitService) {}

  async findAllMeasureUnits() {
    const measureUnits = await this.measureUnitService.findAll();
    return measureUnits;
  }

  async findByIdMeasureUnit(req: IIdRequestParams) {
    const { id } = req.params;
    const measureUnit = await this.measureUnitService.findById(id);
    return measureUnit;
  }

  async createMeasureUnit(req: ITypedRequestBody<CreateMeasureUnitDto>) {
    const newMeasureUnit = await this.measureUnitService.createOne(req.body);
    return newMeasureUnit;
  }

  async updateMeasureUnit(req: ITypedPutRequest<PutMeasureUnitDto>) {
    const { id } = req.params;
    const updatedMeasureUnit = await this.measureUnitService.updateOne(id, req.body);
    return updatedMeasureUnit;
  }

  async deleteMeasureUnit(req: IIdRequestParams) {
    const { id } = req.params;
    await this.measureUnitService.deleteOne(id);
  }
}

const measureUnitController = new MeasureUnitController(new MeasureUnitService());
export default measureUnitController;
