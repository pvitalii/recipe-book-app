import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from 'http-errors';

/* eslint-disable */
export function errorHandler(err: HttpError, _req: Request, res: Response, _next: NextFunction) {
  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;
  return res.status(statusCode).json(err.message);
}
