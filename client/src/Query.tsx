import gql from 'graphql-tag';

export const FORECAST_QUERY = gql`
  query Location($name: String!) {
    hourlyForecastByName(name: $name) {
      city {
        name
      }
      list {
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
  }
`;

export const COORDS_QUERY = gql`
  query Location($lon: Float!, $lat: Float!) {
    hourlyForecastByCoords(lon: $lon, lat: $lat) {
      city {
        name
      }
      list {
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
  }
`;
