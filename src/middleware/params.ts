import { Request, Response, NextFunction } from 'express';
import { RADIUS } from '@helper';

const reg = /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i;

export const getParamsByTag = async (req: Request, res: Response, next: NextFunction) => {
  const { tag, isActive } = req.query;

  if (!tag || !isActive) {
    return res.sendStatus(400);
  }

  if (!['true', 'false'].includes(isActive as string)) {
    return res.sendStatus(400);
  }

  return next();
};

export const getParamsByGuid = async (req: Request, res: Response, next: NextFunction) => {
  const { from, to } = req.query;

  if (!from || !to) {
    return res.sendStatus(400);
  }

  if (!(from as string).match(reg) || !(to as string).match(reg)) {
    return res.sendStatus(400);
  }

  return next();
};

export const getParamsByArea = async (req: Request, res: Response, next: NextFunction) => {
  const { distance } = req.query;

  // @ts-ignore
  if (+distance >= RADIUS) {
    return res.sendStatus(400);
  }

  return next();
};
