import { gql } from 'apollo-server';
import fetch from 'node-fetch';

import { ENDPOINT, APP_ID } from '../constants';

export const typeDefs = gql`
  type CurrentForecast {
    coord: CurrentForecastCoord!
    weather: [CurrentForecastWeather!]!
    base: String!
    main: CurrentForecastMain!
    visibility: Int
    wind: CurrentForecastWind!
    clouds: CurrentForecastClouds!
    dt: Int!
    sys: CurrentForecastSys!
    id: ID!
    name: String!
    cod: Int!
  }

  type CurrentForecastCoord {
    lon: Float!
    lat: Float!
  }

  type CurrentForecastWeather {
    id: ID!
    main: String!
    description: String!
    icon: String!
  }

  type CurrentForecastMain {
    temp: Float!
    pressure: Int!
    humidity: Int!
    temp_min: Float!
    temp_max: Float!
  }

  type CurrentForecastWind {
    speed: Float!
    deg: Float
  }

  type CurrentForecastClouds {
    all: Int!
  }

  type CurrentForecastSys {
    type: Int!
    id: ID!
    message: Float!
    country: String!
    sunrise: Int!
    sunset: Int!
  }

  extend type Query {
    currentForecast(name: String, lon: Float, lat: Float): CurrentForecast!
    currentForecastByName(name: String!): CurrentForecast!
    currentForecastByIDs(ids: [ID!]!): [CurrentForecast!]!
    currentForecastByCoords(lon: Float!, lat: Float!): CurrentForecast!
  }
`;

// TODO set fetch base config
const BASE_URL = `${ENDPOINT}weather${APP_ID}`;

export const resolvers = {
  Query: {
    currentForecast: async (
      _: any,
      {
        name,
        lon,
        lat,
      }: { readonly name: string; readonly lon: number; readonly lat: number }
    ) => {
      let conditionalEndpoint: string;

      // TODO remove condition
      if (name) {
        conditionalEndpoint = `${BASE_URL}&q=${name}`;
      } else {
        conditionalEndpoint = `${BASE_URL}&lat=${lat}&lon=${lon}`;
      }

      const res = await fetch(conditionalEndpoint);

      // TODO? add types
      const data = await res.json();

      // TODO? add middleware
      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
    currentForecastByName: async (
      _: any,
      { name }: { readonly name: string }
    ) => {
      const res = await fetch(`${BASE_URL}&q=${name}`);

      // TODO? add types
      const data = await res.json();

      // TODO? add middleware
      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
    currentForecastByIDs: async (
      _: any,
      { ids }: { readonly ids: string[] }
    ) => {
      const forecasts = [];

      for (const id of ids) {
        const res = await fetch(`${BASE_URL}&id=${id}`);

        // TODO? add types
        const data = await res.json();

        // TODO? add middleware
        if (data.cod === '400') {
          throw new Error('wrong data type');
        }

        forecasts.push(data);
      }

      return forecasts;
    },
    currentForecastByCoords: async (
      _: any,
      { lon, lat }: { readonly lon: number; readonly lat: number }
    ) => {
      const res = await fetch(`${BASE_URL}&lat=${lat}&lon=${lon}`);

      // TODO? add types
      const data = await res.json();

      // TODO? add middleware
      if (data.cod === '400') {
        throw new Error('wrong data type');
      }

      return data;
    },
  },
};
