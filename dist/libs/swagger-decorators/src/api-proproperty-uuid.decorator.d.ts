import { ApiPropertyOptions } from '@nestjs/swagger';
import { UUIDVersion, ValidationOptions } from 'class-validator';
export declare function ApiPropertyUuid(options?: ApiPropertyOptions, version?: UUIDVersion, validationOptions?: ValidationOptions): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
