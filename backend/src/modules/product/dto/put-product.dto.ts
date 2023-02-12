import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PutProductDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;
}
