import { Router } from 'express';
import { getParamsByArea, getParamsByGuid, getParamsByTag, isAuthenticated } from '@middleware';
import { getAllCities, getArea, getAreaResult, getCitiesByTag, getDistance } from '@controllers';

export default (router: Router) => {
  router.get('/cities-by-tag', isAuthenticated, getParamsByTag, getCitiesByTag);
  router.get('/all-cities', isAuthenticated, getAllCities);
  router.get('/distance', isAuthenticated, getParamsByGuid, getDistance);
  router.get('/area', isAuthenticated, getParamsByArea, getArea);
  router.get('/area-result/:id', isAuthenticated, getAreaResult);
};
