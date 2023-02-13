import Express, { json, urlencoded } from 'express';
import 'dotenv/config';
import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import connectMongoDB from './database/mongo-connect';
import { errorHandler } from './middlewares/error-handler';
import { appRouter } from './routes';
import './middlewares/auth/jwt-strategy';
import './middlewares/auth/local-strategy';

const app = Express();

connectMongoDB();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', appRouter);

app.use(errorHandler);

const port = process.env.PORT || 7000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on port ${port}`));
