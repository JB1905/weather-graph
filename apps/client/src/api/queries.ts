import { gql } from '@apollo/client';

export const FORECAST_BY_IDS = gql`
  query CurrentForecastByIDs($ids: [ID!]!) {
    currentForecastByIDs(ids: $ids) {
      id
      name
      coord {
        lat
        lon
      }
      weather {
        description
      }
      # TODO fragment
      main {
        temp
        temp_min
        temp_max
        humidity
        pressure
      }
      # TODO fragment
      wind {
        deg
        speed
      }
      sys {
        sunrise
        sunset
      }
    }
  }
`;

export const UV_INDEX = gql`
  query CurrentUVIndexByCoords($lon: Float!, $lat: Float!) {
    currentUVIndexByCoords(lon: $lon, lat: $lat) {
      value
    }
  }
`;

export const LONG_TERM_FORECAST = gql`
  query ForecastByName($name: String!) {
    forecastByName(name: $name) {
      list {
        # TODO fragment
        main {
          temp
          temp_min
          temp_max
          pressure
          humidity
        }
        # TODO fragment
        wind {
          deg
          speed
        }
      }
    }
  }
`;
