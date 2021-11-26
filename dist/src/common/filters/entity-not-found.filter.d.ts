import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { NotFoundError } from 'rxjs';
import { EntityNotFoundError } from 'typeorm';
export declare class EntityNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError | NotFoundError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
