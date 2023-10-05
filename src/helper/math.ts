import { City } from '@types';

export const RADIUS: number = 6_371;

export const calculateDistanceKm = (a: City, b: City): number => {
  const lat = deg2rad(b.latitude - a.latitude);
  const lon = deg2rad(b.longitude - a.longitude);
  const latARad = deg2rad(a.latitude);
  const latBRad = deg2rad(b.latitude);

  const x =
    Math.sin(lat / 2) * Math.sin(lat / 2) +
    Math.sin(lon / 2) * Math.sin(lon / 2) * Math.cos(latARad) * Math.cos(latBRad);

  return RADIUS * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
};

const deg2rad = (deg: number): number => deg * (Math.PI / 180);
