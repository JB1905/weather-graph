import { gql } from 'apollo-server';
import fetch from 'node-fetch';

import { ENDPOINT, APP_ID } from '../constants';

export const typeDefs = gql`
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

export const resolvers = {
  Query: {
    currentUVIndexByCoords: async (
      _: any,
      { lon, lat }: { readonly lon: number; readonly lat: number }
    ) => {
      // TODO? move ${ENDPOINT}uvi${APP_ID} to BASE_URL const
      const res = await fetch(`${ENDPOINT}uvi${APP_ID}&lat=${lat}&lon=${lon}`);

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
