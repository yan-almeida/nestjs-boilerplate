import { genSaltSync, hashSync } from 'bcrypt';
import { TransformFnParams } from 'class-transformer';

export const HashPasswordTransform = (property: TransformFnParams) => {
  return hashSync(property.value, genSaltSync());
};
