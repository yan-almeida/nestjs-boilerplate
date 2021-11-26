import { ColumnOptions, ValueTransformer } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
export declare class TypeOrmColumnParser {
    static toTransformer(options?: ColumnOptions): ValueTransformer | ValueTransformer[];
    static toEncryptedTransformer(): EncryptionTransformer;
    static toName(propertyKey: string, options?: ColumnOptions): string;
    private static camelToSnakeCase;
}
