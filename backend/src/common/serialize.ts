import { ClassConstructor, plainToClass } from 'class-transformer';

export function serialize<T, K>(cls: ClassConstructor<T>, plain: K): T {
  return plainToClass(cls, plain, { strategy: 'excludeAll' });
}
