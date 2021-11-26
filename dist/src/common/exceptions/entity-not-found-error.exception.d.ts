import { HttpException } from '@nestjs/common';
export declare class EntityNotFoundError extends HttpException {
    constructor(entityClassName: any, criteria?: any);
}
