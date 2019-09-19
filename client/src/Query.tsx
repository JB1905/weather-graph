import gql from 'graphql-tag';

export const FORECAST_QUERY = gql`
  query Location($name: String!) {
    currentForecastByName(name: $name) {
      name
      dt
      main {
        temp
        pressure
        humidity
      }
      weather {
        description
      }
      wind {
        speed
      }
      clouds {
        all
      }
    }
  }
`;

export const COORDS_QUERY = gql`
  query Location($lon: Float!, $lat: Float!) {
    currentForecastByCoords(lon: $lon, lat: $lat) {
      name
      dt
      main {
        temp
        pressure
        humidity
      }
      weather {
        description
      }
      wind {
        speed
      }
      clouds {
        all
      }
    }
  }
`;
