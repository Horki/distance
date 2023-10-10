import { Router } from 'express';
import city from './city';

export default (): Router => {
  const router = Router();

  city(router);

  return router;
};
