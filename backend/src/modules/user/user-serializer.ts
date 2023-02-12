import { Expose, Transform } from 'class-transformer';

export class UserSerializer {
  @Expose()
  @Transform((value) => {
    if ('value' in value) {
      return value.obj[value.key].toString();
    }
    return 'unknown value';
  })
  _id: string;

  @Expose()
  email: string;

  password: string;

  @Expose()
  role: string;

  __v: string;
}
