import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IControllerFunction<T, K> {
  (req: T): K;
}

export function responseHandler<T extends Request, K>(
  func: IControllerFunction<T, K>,
  statusOnSuccess = StatusCodes.OK
) {
  return async (req: T, res: Response, next: NextFunction) => {
    try {
      const returnedValue = await func(req);
      return res.status(statusOnSuccess).json(returnedValue);
    } catch (e) {
      return next(e);
    }
  };
}
