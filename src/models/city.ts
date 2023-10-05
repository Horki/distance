import { Schema, model } from 'mongoose';
import { Tag } from '@types';

const CitySchema = new Schema({
  guid: { type: String, index: true, unique: true },
  isActive: Boolean,
  address: String,
  latitude: Number,
  longitude: Number,
  tags: [String],
});

export const CityModel = model('cities', CitySchema);

export const getAllCities = () => CityModel.find({});

export const getCitiesByTag = (tags: Tag, isActive: boolean) => CityModel.find({ tags, isActive });

export const getCityById = (guid: string) => CityModel.findOne({ guid });
