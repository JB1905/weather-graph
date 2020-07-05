import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type Standards {
    name: String
    pollutant: String
    limit: Int
    percent: Int
    averaging: String
  }

  type Indexes {
    name: String
    value: Int
    level: String
    description: String
    advice: String
    color: String
  }

  type Values {
    name: String
    value: Int
  }

  type Forecast {
    fromDateTime: String
    tillDateTime: String
    standards: [Standards]
    indexes: [Indexes]
    values: [Values]
  }

  type History {
    fromDateTime: String
    tillDateTime: String
    standards: [Standards]
    indexes: [Indexes]
    values: [Values]
  }

  type Current {
    fromDateTime: String
    tillDateTime: String
    standards: [Standards]
    indexes: [Indexes]
    values: [Values]
  }

  extend type Query {
    currentPollution(lon: Float!, lat: Float!): Current!
  }
`;

const resolvers = {
  Query: {
    currentPollution: async (
      _: any,
      { lon, lat }: { lon: number; lat: number }
    ) => {
      const res = await fetch(
        `https://airapi.airly.eu/v2/measurements/point?indexType=AIRLY_CAQI&lat=${lat}&lng=${lon}`
      );

      const data = await res.json();

      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
  },
};

export default {
  typeDefs,
  resolvers,
};
