import { Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
export declare const PaginatedOkResponse: <TModel extends Type<any>>(model: TModel, options?: ApiResponseOptions) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
