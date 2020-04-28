import { gql } from 'apollo-server';
import fetch from 'node-fetch';

import { endpoint, appid } from '../utils';

const typeDefs = gql`
  type CurrentUVIndex {
    lat: Float!
    lon: Float!
    date_iso: String!
    date: Int!
    value: Float!
  }

  extend type Query {
    currentUVIndexByCoords(lon: Float!, lat: Float!): CurrentUVIndex!
  }
`;

const resolvers = {
  Query: {
    currentUVIndexByCoords: async (
      _: any,
      { lon, lat }: { lon: number; lat: number }
    ) => {
      const res = await fetch(`${endpoint}uvi${appid}&lat=${lat}&lon=${lon}`);

      const data = await res.json();

      if (data.cod === '400') {
        throw new Error('wrong data type');
      }

      return data;
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};
