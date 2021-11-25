import {
  Body,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import {
  ApiController,
  NoContentResponse,
  UnauthorizedResponse,
  UnprocessableEntityResponse,
} from '../../../libs/swagger-decorators/src';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { RecoveryPasswordDto } from '../auth/dto/recovery-password.dto';
import { RecoveryPasswordConfirmDto } from './dtos/recovery-password-confirm.dto';
import { ResetPasswordDto } from './dtos/reset-password.dto';
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

  @Put('reset')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiBearerAuth()
  @NoContentResponse({ description: 'Reset de senha' })
  @UnauthorizedResponse()
  @UnprocessableEntityResponse()
  @UseGuards(JwtAuthGuard)
  resetPassword(@Body() dto: ResetPasswordDto, @Req() req: Request) {
    return this._passwordService.resetPassword(req.user.userId, dto);
  }
}
