import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { ClassConstructor, plainToClass } from 'class-transformer';
import httpErrors from 'http-errors';

export function bodyValidator<T>(dto: ClassConstructor<T>) {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const entityToValidate = plainToClass(dto, req.body);
    const errors = await validate(entityToValidate as Object);
    if (errors.length) {
      const err = httpErrors.BadRequest(JSON.stringify(errors.map((obj) => obj.constraints)));
      return next(err);
    }
    req.body = entityToValidate;
    return next();
  };
}
