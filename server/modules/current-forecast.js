const { gql } = require('apollo-server');
const fetch = require('node-fetch');

const endpoint = require('../utils');

const typeDefs = gql`
  type CurrentForecast {
    coord: Coord!
    weather: [Weather!]!
    base: String!
    main: Main!
    visibility: Int!
    wind: Wind!
    clouds: Clouds!
    dt: Int!
    sys: Sys!
    id: ID!
    name: String!
    cod: Int!
  }

  type Coord {
    lon: Float!
    lat: Float!
  }

  type Weather {
    id: ID!
    main: String!
    description: String!
    icon: String!
  }

  type Main {
    temp: Float!
    pressure: Int!
    humidity: Int!
    temp_min: Float!
    temp_max: Float!
  }

  type Wind {
    speed: Float!
    deg: Float!
  }

  type Clouds {
    all: Int!
  }

  type Sys {
    type: Int!
    id: ID!
    message: Float!
    country: String!
    sunrise: Int!
    sunset: Int!
  }

  extend type Query {
    currentForecastByName(name: String!): CurrentForecast!
    currentForecastByCoords(lon: Float!, lat: Float!): CurrentForecast!
  }
`;

const resolvers = {
  Query: {
    currentForecastByName: async (parent, { name }) => {
      const res = await fetch(`${endpoint}&q=${name}`);

      const data = await res.json();

      if (data.cod === '404') {
        throw new Error(data.message);
      }

      return data;
    },
    currentForecastByCoords: async (parent, { lon, lat }) => {
      const res = await fetch(`${endpoint}&lat=${lat}&lon=${lon}`);

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
