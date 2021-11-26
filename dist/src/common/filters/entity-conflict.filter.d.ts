import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { EntityConflictError } from '../exceptions/entity-conflict-error.exception';
export declare class EntityConflictExceptionFilter implements ExceptionFilter {
    catch(exception: EntityConflictError, host: ArgumentsHost): Response<any, Record<string, any>>;
}
