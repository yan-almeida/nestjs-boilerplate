import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { Response } from 'express';

@Catch(UnprocessableEntityException)
export class UnprocessableEntityExceptionFilter implements ExceptionFilter {
  catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    ApiUnprocessableEntityResponse({ description: exception.message });

    return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      error: 'Unprocessable entity',
      message: exception.message,
    });
  }
}
