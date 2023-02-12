import { HydratedDocument, Model, UpdateQuery } from 'mongoose';

export abstract class CRUDService<T> {
  constructor(private model: Model<T>) {}

  async findAll(): Promise<HydratedDocument<T>[]> {
    return this.model.find();
  }

  async findById(id: string): Promise<HydratedDocument<T> | null> {
    return this.model.findById(id);
  }

  createOne<K>(dto: K): Promise<HydratedDocument<T>> {
    return this.model.create(dto);
  }

  async updateOne<K>(id: string, dto: K): Promise<HydratedDocument<T> | null> {
    return this.model.findByIdAndUpdate(id, dto as UpdateQuery<T>, { new: true });
  }

  async deleteOne(id: string): Promise<HydratedDocument<T> | null> {
    return this.model.findByIdAndDelete(id);
  }
}
