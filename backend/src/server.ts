import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { AppRouter } from './routes';
import connectMongoDB from './database/mongo-connect';
import { errorHandler } from './middlewares/error-handler';

export class Server {
  private app: express.Application;

  start() {
    this.initServer();
    this.initConfig();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.connectToDb();
    this.startListening();
  }

  initServer() {
    this.app = express();
  }

  initConfig() {
    dotenv.config();
  }

  initMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  initRoutes() {
    const apiRouter = new AppRouter(this.app);
    apiRouter.init();
  }

  initErrorHandling() {
    this.app.use(errorHandler);
  }

  connectToDb() {
    connectMongoDB();
  }

  startListening() {
    const port = process.env.PORT || 7000;
    // eslint-disable-next-line no-console
    this.app.listen(port, () => console.log(`Server started on port ${port}`));
  }
}
