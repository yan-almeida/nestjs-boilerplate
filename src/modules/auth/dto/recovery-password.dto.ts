import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { LowerCaseTransform } from '../../../common/transformers/lower-case.transform';

export class RecoveryPasswordDto {
  @ApiProperty({ example: 'mail@mail.com' })
  @IsEmail({}, { message: 'E-mail digitado é inválido' })
  @MinLength(2, { message: 'O nome deve possuir no mínimo 2 caracteres.' })
  @ApiProperty()
  @Transform(LowerCaseTransform)
  email: string;
}
