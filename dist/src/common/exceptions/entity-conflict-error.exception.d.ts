import { HttpException } from '@nestjs/common';
export declare class EntityConflictError extends HttpException {
    constructor(entityClassName: any, criterio: string | number);
}
