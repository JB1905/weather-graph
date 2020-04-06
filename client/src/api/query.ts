import { gql } from '@apollo/client';

export const FORECAST_BY_IDS = gql`
  query Location($ids: [ID!]!) {
    currentForecastByIDs(ids: $ids) {
      id
      name
      weather {
        description
      }
      main {
        temp
        temp_min
        temp_max
        humidity
        pressure
      }
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

export const FORECAST_QUERY = gql`
  query Location($name: String!) {
    currentForecastByName(name: $name) {
      id
      name
      coord {
        lat
        lon
      }
    }
  }
`;

export const UV_INDEX = gql`
  query Location($lon: Float!, $lat: Float!) {
    currentUVIndexByCoords(lon: $lon, lat: $lat) {
      value
    }
  }
`;

export const LONG_TERM_FORECAST = gql`
  query Location($name: String!) {
    forecastByName(name: $name) {
      list {
        main {
          temp
          temp_min
          temp_max
          pressure
          humidity
        }
        # weather {
        #   description
        # }
        # clouds {
        # }
        wind {
          deg
          speed
        }
      }
    }
  }
`;

export const COORDS_QUERY = gql`
  query Location($lon: Float!, $lat: Float!) {
    forecastByCoords(lon: $lon, lat: $lat) {
      city {
        id
        name
      }
    }
  }
`;

export const CITY_IMAGE = gql`
  query CityImage($name: String!) {
    cityByName(name: $name) {
      photos {
        image {
          web
        }
      }
    }
  }
`;
