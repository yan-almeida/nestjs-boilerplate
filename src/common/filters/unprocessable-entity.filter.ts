import { BadRequestResponse } from '@app/swagger-decorators';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(UnprocessableEntityException)
export class UnprocessableEntityExceptionFilter implements ExceptionFilter {
  catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();

    BadRequestResponse({ description: exception.message });

    return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
      error: 'Unprocessable entity',
      message: exception.message,
    });
  }
}
