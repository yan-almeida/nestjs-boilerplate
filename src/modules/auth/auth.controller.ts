import {
  ApiController,
  BadRequestResponse,
  OkResponse,
  UnauthorizedResponse,
} from '@app/swagger-decorators';
import {
  Body,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { AuthedDto } from './dto/authed.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthParser } from './parsers/auth.parser';

@ApiController('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @OkResponse({
    description: 'Autenticação',
    type: AuthedDto,
  })
  @UnauthorizedResponse()
  @BadRequestResponse()
  async create(@Body() dto: LoginAuthDto): Promise<AuthedDto> {
    const loggedUser = await this._authService.loginUser(
      dto.email,
      dto.password,
    );

    return AuthParser.toAuthedDto(loggedUser.user, loggedUser.token);
  }

  @Get('profile')
  @OkResponse({
    description: 'Verificação de token',
  })
  @ApiBearerAuth()
  @UnauthorizedResponse()
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req: Request) {
    return req.user ?? null;
  }
}
