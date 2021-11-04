import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from 'src/modules/user/dto/user.dto';

export class AuthedDto {
  @ApiProperty()
  user: UserDto;

  @ApiProperty()
  token: string;
}
