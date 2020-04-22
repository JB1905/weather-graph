import { gql } from 'apollo-server';
import fetch from 'node-fetch';

import { endpoint, appid } from '../utils';

const typeDefs = gql`
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
    currentForecastByName(name: String!): CurrentForecast!
    currentForecastByIDs(ids: [ID!]!): [CurrentForecast!]!
    currentForecastByCoords(lon: Float!, lat: Float!): CurrentForecast!
  }
`;

const resolvers = {
  Query: {
    currentForecastByName: async (_: any, { name }: { name: string }) => {
      const res = await fetch(`${endpoint}weather${appid}&q=${name}`);

      const data = await res.json();

      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
    currentForecastByIDs: async (_: any, { ids }: { ids: string[] }) => {
      const forecasts = [];

      for (const id of ids) {
        const res = await fetch(`${endpoint}weather${appid}&id=${id}`);

        const data = await res.json();

        if (data.cod === '400') {
          throw new Error('wrong data type');
        }

        forecasts.push(data);
      }

      return forecasts;
    },
    currentForecastByCoords: async (
      _: any,
      { lon, lat }: { lon: number; lat: number }
    ) => {
      const res = await fetch(
        `${endpoint}weather${appid}&lat=${lat}&lon=${lon}`
      );

      const data = await res.json();

      if (data.cod === '400') {
        throw new Error('wrong data type');
      }

      return data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
