import { Application } from 'express';

export class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (_req, res) => res.json('API RUNNING'));
  }
}
