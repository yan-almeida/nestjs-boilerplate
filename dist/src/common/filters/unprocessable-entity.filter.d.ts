import { ArgumentsHost, ExceptionFilter, UnprocessableEntityException } from '@nestjs/common';
import { Response } from 'express';
export declare class UnprocessableEntityExceptionFilter implements ExceptionFilter {
    catch(exception: UnprocessableEntityException, host: ArgumentsHost): Response<any, Record<string, any>>;
}
