import { SelectQueryBuilder } from 'typeorm';
import { BuilderFunction } from '../builders/entity-filter.builder';
export declare abstract class PaginationDto {
    page?: number;
    limit?: number;
    order?: {
        [prop: string]: 'ASC' | 'DESC';
    };
    startAt?: string;
    endAt?: string;
    protected getWithArray(value: any): any[];
    protected withFilter<E = any>(field: E, fnc: BuilderFunction<E>): void;
    protected withOrderBy<E = any>(field: E, value: E, fnc: BuilderFunction<E>): void;
    protected createLike(value: string): string;
    abstract createWhere<T = any>(queryBuilder: SelectQueryBuilder<T>): void;
    createOrder<T = any>(queryBuilder: SelectQueryBuilder<T>): void;
}
