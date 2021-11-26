import { ApiResponseOptions } from '@nestjs/swagger';
export declare function OkResponse(options?: ApiResponseOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
