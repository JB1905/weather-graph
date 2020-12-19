import { gql } from 'apollo-server';
import fetch from 'node-fetch';

import { endpoint, appid } from '../utils';

const typeDefs = gql`
  type Forecast {
    cod: String!
    message: Float!
    cnt: Int!
    list: [ForecastHourData!]!
    city: ForecastCity!
  }

  type ForecastHourData {
    dt: Int!
    main: ForecastMain!
    weather: [ForecastWeather!]!
    clouds: ForecastClouds!
    wind: ForecastWind!
    sys: ForecastSys!
    dt_txt: String!
  }

  type ForecastMain {
    temp: Float!
    temp_min: Float!
    temp_max: Float!
    pressure: Float!
    sea_level: Float!
    grnd_level: Float!
    humidity: Int!
    temp_kf: Float!
  }

  type ForecastWeather {
    id: ID!
    main: String!
    description: String!
    icon: String!
  }

  type ForecastClouds {
    all: Int!
  }

  type ForecastWind {
    speed: Float!
    deg: Float!
  }

  type ForecastSys {
    pod: String!
  }

  type ForecastCity {
    id: ID!
    name: String!
    coord: ForecastCoord!
    country: String!
  }

  type ForecastCoord {
    lon: Float!
    lat: Float!
  }

  extend type Query {
    forecastByName(name: String!): Forecast!
    forecastByCoords(lon: Float!, lat: Float!): Forecast!
  }
`;

const resolvers = {
  Query: {
    forecastByName: async (_: any, { name }: { name: string }) => {
      const res = await fetch(`${endpoint}forecast${appid}&q=${name}`);

      const data = await res.json();

      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
    forecastByCoords: async (
      _: any,
      { lon, lat }: { lon: number; lat: number }
    ) => {
      const res = await fetch(
        `${endpoint}forecast${appid}&lat=${lat}&lon=${lon}`
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
