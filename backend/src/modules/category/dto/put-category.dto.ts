import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class PutCategoryDto {
  @IsOptional()
  @IsString()
  @IsEmpty()
  name?: string;
}
