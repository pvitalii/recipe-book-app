import { Request } from 'express';

export interface ITypedRequestParams<T> extends Request<T> {}

export interface ITypedRequestBody<T> extends Request {
  body: T;
}

export interface ITypedPutRequest<T> extends Request<{ id: string }> {
  body: T;
}

export interface IIdRequestParams extends ITypedRequestParams<{ id: string }> {}
