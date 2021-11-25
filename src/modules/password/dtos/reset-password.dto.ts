import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import * as Faker from 'faker-br';

export class ResetPasswordDto {
  @ApiProperty({ example: Faker.internet.password() })
  @IsString({ message: 'A senha atual é obrigatória.' })
  @MinLength(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' })
  currentPassword: string;

  @ApiProperty({ example: Faker.internet.password() })
  @IsString({ message: 'A nova senha é obrigatória.' })
  @MinLength(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' })
  newPassword: string;
}
