export declare type BuilderFunction<T> = (fieldValue: T) => void;
export declare class EntityFilterBuilder {
    static withFilter<T>(field: T, fnc: BuilderFunction<T>): void;
    static withOrderBy<T>(field: T, value: T, fnc: BuilderFunction<T>): void;
    static getAsArray<T>(value: T | T[]): T[] | undefined;
    static createLike(value: string): string;
}
