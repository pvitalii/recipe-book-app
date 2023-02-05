import { IsEmpty, IsOptional, IsString } from 'class-validator';

export class PutProductDto {
  @IsOptional()
  @IsString()
  @IsEmpty()
  name?: string;
}
