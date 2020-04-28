import { gql } from '@apollo/client';

export const MAIN = gql`
  fragment Main on CurrentForecastMain {
    temp
    temp_min
    temp_max
    humidity
    pressure
  }
`;

export const WIND = gql`
  fragment Wind on CurrentForecastWind {
    deg
    speed
  }
`;

export const SYS = gql`
  fragment Sys on CurrentForecastSys {
    sunrise
    sunset
  }
`;

export const COORD = gql`
  fragment Coord on CurrentForecastCoord {
    lat
    lon
  }
`;
