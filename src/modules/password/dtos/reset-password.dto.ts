import { ApiProperty } from '@nestjs/swagger';
import * as Faker from 'faker-br';

export class ResetPasswordDto {
  @ApiProperty({ example: Faker.internet.password() })
  currentPassword: string;

  @ApiProperty({ example: Faker.internet.password() })
  newPassword: string;
}
