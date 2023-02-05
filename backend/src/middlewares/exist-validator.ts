import { NextFunction, Response } from 'express';
import httpErrors from 'http-errors';
import { IIdRequestParams } from '../common/types';

interface IFindByIdFunction<T> {
  (id: string): Promise<T | null>;
}

export function existValidator<T>(func: IFindByIdFunction<T>) {
  return async (req: IIdRequestParams, _res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      const document = await func(id);
      if (!document) {
        throw httpErrors.NotFound('Document with such id not found');
      }
      return next();
    } catch (e) {
      return next(e);
    }
  };
}
