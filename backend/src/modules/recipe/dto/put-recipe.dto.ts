import { IsArray, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class PutRecipeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description?: string;

  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  ingredients?: string[];

  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  categories?: string[];
}
