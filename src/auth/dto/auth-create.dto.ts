import { IsString } from 'class-validator';

export class AuthCreateDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}
