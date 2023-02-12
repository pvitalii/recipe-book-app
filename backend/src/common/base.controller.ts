import { boundMethod } from 'autobind-decorator';
import { Request, Response, NextFunction } from 'express';
import httpErrors from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { HydratedDocument } from 'mongoose';
import { CRUDService } from './crud.service';

interface IdRequestParams {
  id: string;
}

export abstract class BaseController<T> {
  constructor(private service: CRUDService<T>) {}

  protected existCheck<K>(document: K) {
    if (!document) throw httpErrors.NotFound('Document with such id not found');
    return document;
  }

  @boundMethod
  async findAll(_req: Request, res: Response) {
    return res.json(await this.service.findAll());
  }

  @boundMethod
  async findById(req: Request<IdRequestParams>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const document = await this.service.findById(id);
      return res.json(this.existCheck(document));
    } catch (e) {
      next(e);
    }
  }

  @boundMethod
  async createOne<K>(req: Request<{}, HydratedDocument<T>, K>, res: Response) {
    const newDocument = await this.service.createOne(req.body);
    return res.status(StatusCodes.CREATED).json(newDocument);
  }

  @boundMethod
  async updateOne<K>(
    req: Request<{ id: string }, HydratedDocument<T>, K>,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const updatedDocument = await this.service.updateOne(id, req.body);
      return res.json(this.existCheck(updatedDocument));
    } catch (e) {
      next(e);
    }
  }

  @boundMethod
  async deleteOne(req: Request<IdRequestParams>, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const deletedDocument = await this.service.deleteOne(id);
      this.existCheck(deletedDocument);
      return res.status(StatusCodes.NO_CONTENT).json();
    } catch (e) {
      next(e);
    }
  }
}
