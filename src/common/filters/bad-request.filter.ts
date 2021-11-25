import { BadRequestResponse } from '@app/swagger-decorators';
import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    BadRequestResponse({ description: exception.message });

    return response.status(HttpStatus.BAD_REQUEST).json({
      error: 'Bad request',
      message: (exception.getResponse() as any).message,
    });
  }
}
