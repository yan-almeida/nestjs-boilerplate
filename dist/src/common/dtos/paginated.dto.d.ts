export declare class MetaDto {
    totalItems?: number;
    itemCount?: number;
    itemsPerPage?: number;
    totalPages?: number;
    currentPage?: number;
}
export declare class PaginatedDto<T> {
    items: T[];
    meta: MetaDto;
}
