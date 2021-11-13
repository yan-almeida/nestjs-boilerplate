import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsString, MinLength } from 'class-validator';
import * as Faker from 'faker-br';

export class RecoveryPasswordConfirmDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  @IsJWT({ message: 'Json Web Token é inválido.' })
  recoveryToken: string;

  @ApiProperty({ example: Faker.internet.password() })
  @IsString({ message: 'A senha é obrigatória.' })
  @MinLength(5, { message: 'A senha. Deve possuir no mínimo 5 caracteres.' })
  newPassword: string;
}
