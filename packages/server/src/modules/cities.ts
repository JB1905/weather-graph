import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type City {
    photos: [CityPhotos!]!
  }

  type CityPhotos {
    image: CityImage!
  }

  type CityImage {
    mobile: String
    web: String!
  }

  extend type Query {
    cityByName(name: String!): City!
  }
`;

const resolvers = {
  Query: {
    cityByName: async (_: any, { name }: { name: string }) => {
      const res = await fetch(
        `https://api.teleport.org/api/urban_areas/slug:${name}/images/`
      );

      const data = await res.json();

      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
