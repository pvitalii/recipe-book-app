import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMeasureUnitDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
