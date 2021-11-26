import { HttpException } from '@nestjs/common';
export declare class NotFoundError extends HttpException {
    constructor(customMessage: string);
}
