import { gql } from '@apollo/client';

export const HOME_PAGE_QUERY = gql`
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
      }
      wind {
        deg
        speed
      }
    }
  }
`;

export const FORECAST_QUERY = gql`
  query Location($name: String!) {
    currentForecastByName(name: $name) {
      id
      name
      dt
      main {
        temp
        pressure
        humidity
      }
      visibility
      weather {
        description
      }
      wind {
        speed
        deg
      }
      sys {
        sunrise
        sunset
      }
      clouds {
        all
      }
    }

    # forecastByName(name: $name) {
    #   list {
    #     main {
    #       temp
    #       temp_min
    #       temp_max
    #       pressure
    #       humidity
    #     }
    #     # weather {
    #     #   description
    #     # }
    #     # clouds {
    #     # }
    #     wind {
    #       deg
    #       speed
    #     }
    #   }
    # }
  }
`;

export const COORDS_QUERY = gql`
  query Location($lon: Float!, $lat: Float!) {
    currentForecastByCoords(lon: $lon, lat: $lat) {
      id
      name
      dt
      main {
        temp
        pressure
        humidity
      }
      visibility
      weather {
        description
      }
      wind {
        speed
        deg
      }
      sys {
        sunrise
        sunset
      }
      clouds {
        all
      }
    }

    forecastByCoords(lon: $lon, lat: $lat) {
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

    # currentUVIndexByCoords(lon: $lon, lat: $lat) {
    #   value
    # }

    # cityByName(name: "paris") {
    #   photos {
    #     image {
    #       mobile
    #       web
    #     }
    #   }
    # }
  }
`;
