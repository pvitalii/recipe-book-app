import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PutCategoryDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
