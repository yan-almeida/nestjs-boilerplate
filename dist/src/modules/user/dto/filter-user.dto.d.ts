import { SelectQueryBuilder } from 'typeorm';
import { PaginationDto } from '../../../common/dtos/pagination.dto';
export declare class FilterUserDto extends PaginationDto {
    fullName?: string;
    email?: string;
    createWhere<T>(queryBuilder: SelectQueryBuilder<T>): void;
    createOrder<T>(queryBuilder: SelectQueryBuilder<T>): void;
}
