import { City } from '@types';
import { calculateDistanceKm } from '@helper';

test('math', () => {
  const cityA: City = {
    guid: 'ed354fef-31d3-44a9-b92f-4a3bd7eb0408',
    isActive: true,
    address: '153 Celeste Court, Hayes, North Carolina, 5410',
    latitude: -1.409358,
    longitude: -37.257104,
    tags: ['nulla', 'irure', 'tempor', 'deserunt', 'proident', 'tempor', 'excepteurus'],
  };
  const cityB: City = {
    guid: '17f4ceee-8270-4119-87c0-9c1ef946695e',
    isActive: false,
    address: '897 Rogers Avenue, Witmer, Alaska, 6315',
    latitude: 46.965565,
    longitude: -172.744857,
    tags: ['est', 'consequat', 'eu', 'ea', 'aliquip', 'laboris', 'cupidatat'],
  };

  const result = calculateDistanceKm(cityA, cityB);

  expect(+result.toFixed(2)).toEqual<number>(13_376.38);
});
