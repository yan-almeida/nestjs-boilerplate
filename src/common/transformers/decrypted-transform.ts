import { TransformFnParams } from 'class-transformer';
import { TypeOrmColumnParser } from '../parsers/typeorm-column.parser';

export const DecryptedTransform = (property: TransformFnParams) =>
  TypeOrmColumnParser.toEncryptedTransformer().to(property.value);
