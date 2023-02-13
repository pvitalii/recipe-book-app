import { IsString, IsNotEmpty, MaxLength, IsArray } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  description: string;

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  ingredients: string[];

  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  categories: string[];
}
