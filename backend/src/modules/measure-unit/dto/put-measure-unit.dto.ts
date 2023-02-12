import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PutMeasureUnitDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
