import express, { Express } from 'express';
import mongoose from 'mongoose';
import { AddressInfo } from 'net';
import 'dotenv/config';
import routes from '@routes';

const app: Express = express();

const server = app.listen(process.env.PORT, () => {
  // @ts-ignore
  const address: AddressInfo | null = server.address();
  const host = address?.address;
  const port = address?.port;

  console.log('DISTANCE app listening at %s://%s:%s', process.env.PROTOCOL, host, port);
});

const MONGO_URL = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (error: Error) => console.error(error));

app.use('/', routes());
