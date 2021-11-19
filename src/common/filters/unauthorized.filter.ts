import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Response } from 'express';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    ApiUnauthorizedResponse({ description: exception.message });

    return response.status(HttpStatus.UNAUTHORIZED).json({
      error: 'Unauthorized',
      message: 'Você não está autorizado.',
    });
  }
}
