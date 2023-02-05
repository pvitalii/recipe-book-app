import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  quantity: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  measureUnitId?: string;

  @IsString()
  @IsNotEmpty()
  productId: string;
}
