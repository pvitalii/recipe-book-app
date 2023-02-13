import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ConfirmEmailDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
