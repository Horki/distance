import { AreaDistance, City, Tag } from '@types';
import { Request, Response } from 'express';
import * as model from '@models';
import { calculateDistanceKm } from '@helper';
import { JsonStreamStringify } from 'json-stream-stringify';
import Queue from 'bull';
import * as process from 'process';

const queue = new Queue('myQueue');

export const getCitiesByTag = async (req: Request, res: Response) => {
  const tagParsed = req.query.tag as Tag;
  const isActiveParsed = req.query.isActive === 'true';

  model
    .getCitiesByTag(tagParsed, isActiveParsed)
    .then((cities) => {
      return res.json({ cities: cities });
    })
    .catch((e) => {
      return res.sendStatus(404).json({ error: `${e.toString()}` });
    });
};

export const getAllCities = async (_req: Request, res: Response) => {
  const cursor = model.getAllCities().cursor();
  res.type('json');
  const stream = new JsonStreamStringify(cursor).pipe(res);
  stream.on('data', (buffer) => {
    res.write(buffer);
  });
};

export const getDistance = async (req: Request, res: Response) => {
  const { from, to } = req.query;
  const [fromCity, toCity] = await Promise.all([
    model.getCityById(from as string),
    model.getCityById(to as string),
  ]);

  if (fromCity === null) {
    return res.sendStatus(404).json({ error: 'missing.from_city' });
  }

  if (toCity === null) {
    return res.sendStatus(404).json({ error: 'missing.to_city' });
  }

  const distance = calculateDistanceKm(fromCity as City, toCity as City);

  return res.json({
    from: {
      guid: from,
    },
    to: {
      guid: to,
    },
    unit: 'km',
    distance: +distance.toFixed(2),
  });
};

export const getArea = async (req: Request, res: Response) => {
  const { from, distance } = req.query;
  const fromCity = await model.getCityById(from as string);
  // @ts-ignore
  const distanceNumber: number = +distance;

  if (fromCity === null) {
    return res.sendStatus(404).json({ error: 'missing.from_city' });
  }

  // @ts-ignore
  const job = await queue.add<AreaDistance>(
    { from, distance: distanceNumber },
    { jobId: '2152f96f-50c7-4d76-9e18-f7033bd14428' }
  );

  return res.status(202).json({
    resultsUrl: `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}/area-result/${job.id}`,
  });
};

export const getAreaResult = async (req: Request, res: Response) => {
  const job = await queue.getJob(req.params.id);

  // @ts-ignore
  const state = await job?.getState();

  if (state && state !== 'completed') {
    return res.sendStatus(202);
  }

  // @ts-ignore
  return res.json({ cities: job.returnvalue });
};

queue.process(async (job: Queue.Job<AreaDistance>) => {
  const { from, distance }: AreaDistance = job.data;

  const [fromCity, allCities] = await Promise.all([
    model.getCityById(from as string),
    model.getAllCities(),
  ]);

  const filteredCities = allCities.filter((city) => {
    return calculateDistanceKm(fromCity as City, city as City) <= distance;
  });

  // @ts-ignore
  return filteredCities.filter((city) => city.guid !== fromCity.guid);
});
