import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type Pollution {}

  extend type Query {
    currentPollution(lon: Float!, lat: Float!): Pollution!
  }
`;

const resolvers = {
  Query: {
    currentPollution: async (_: any, { name }: { name: string }) => {
      // const res = await fetch();
      // const data = await res.json();
      // if (data.cod === '404') {
      //   throw new Error(data.message);
      // }
      // return data;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
