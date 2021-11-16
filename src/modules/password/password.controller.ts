import { Body, HttpCode, HttpStatus, Post } from '@nestjs/common';
import {
  ApiController,
  NoContentResponse,
  UnprocessableEntityResponse,
} from '../../../libs/swagger-decorators/src';
import { RecoveryPasswordDto } from '../auth/dto/recovery-password.dto';
import { RecoveryPasswordConfirmDto } from './dtos/recovery-password-confirm.dto';
import { PasswordService } from './password.service';

@ApiController('password')
export class PasswordController {
  constructor(private readonly _passwordService: PasswordService) {}

  @Post('recovery')
  @HttpCode(HttpStatus.NO_CONTENT)
  @NoContentResponse({ description: 'Solicitação de recuperação de senha' })
  recoveryPassword(@Body() dto: RecoveryPasswordDto) {
    return this._passwordService.recoveryPassword(dto);
  }

  @Post('recovery-confirm')
  @HttpCode(HttpStatus.NO_CONTENT)
  @NoContentResponse({ description: 'Confirmação de recuperação de senha' })
  @UnprocessableEntityResponse()
  recoveryPasswordConfirm(@Body() dto: RecoveryPasswordConfirmDto) {
    return this._passwordService.recoveryPasswordConfirm(dto);
  }

  // @Put('reset')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // resetPassword() {
  //   return this._passwordService.resetPassword();
  // }
}
