import { gql } from 'apollo-server';
import fetch from 'node-fetch';

const typeDefs = gql`
  type Image {
    mobile: String
    web: String!
  }

  type Attribution {
    license: String
    photographer: String
    site: String
    source: String
  }

  type Photos {
    image: Image
    attribution: Attribution
  }

  type Self {
    href: String
  }

  type Curies {
    href: String
    name: String
    templated: Boolean
  }

  type Links {
    self: Self
    curies: [Curies]
  }

  type City {
    photos: [Photos!]!
    _links: Links
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
