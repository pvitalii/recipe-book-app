import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PutIngredientDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  quantity?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  measureUnitId?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productId?: string;
}
