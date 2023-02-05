import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class PutMeasureUnitDto {
  @IsOptional()
  @IsString()
  @IsEmpty()
  name?: string;
}
