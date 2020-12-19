/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentForecastByIDs
// ====================================================

export interface CurrentForecastByIDs_currentForecastByIDs_weather {
  __typename: 'CurrentForecastWeather';
  description: string;
}

export interface CurrentForecastByIDs_currentForecastByIDs_main {
  __typename: 'CurrentForecastMain';
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
}

export interface CurrentForecastByIDs_currentForecastByIDs_wind {
  __typename: 'CurrentForecastWind';
  deg: number | null;
  speed: number;
}

export interface CurrentForecastByIDs_currentForecastByIDs_sys {
  __typename: 'CurrentForecastSys';
  sunrise: number;
  sunset: number;
}

export interface CurrentForecastByIDs_currentForecastByIDs {
  __typename: 'CurrentForecast';
  id: string;
  name: string;
  weather: CurrentForecastByIDs_currentForecastByIDs_weather[];
  main: CurrentForecastByIDs_currentForecastByIDs_main;
  wind: CurrentForecastByIDs_currentForecastByIDs_wind;
  sys: CurrentForecastByIDs_currentForecastByIDs_sys;
}

export interface CurrentForecastByIDs {
  currentForecastByIDs: CurrentForecastByIDs_currentForecastByIDs[];
}

export interface CurrentForecastByIDsVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUVIndexByCoords
// ====================================================

export interface CurrentUVIndexByCoords_currentUVIndexByCoords {
  __typename: 'CurrentUVIndex';
  value: number;
}

export interface CurrentUVIndexByCoords {
  currentUVIndexByCoords: CurrentUVIndexByCoords_currentUVIndexByCoords;
}

export interface CurrentUVIndexByCoordsVariables {
  lon: number;
  lat: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ForecastByName
// ====================================================

export interface ForecastByName_forecastByName_list_main {
  __typename: 'ForecastMain';
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface ForecastByName_forecastByName_list_wind {
  __typename: 'ForecastWind';
  deg: number;
  speed: number;
}

export interface ForecastByName_forecastByName_list {
  __typename: 'ForecastHourData';
  main: ForecastByName_forecastByName_list_main;
  wind: ForecastByName_forecastByName_list_wind;
}

export interface ForecastByName_forecastByName {
  __typename: 'Forecast';
  list: ForecastByName_forecastByName_list[];
}

export interface ForecastByName {
  forecastByName: ForecastByName_forecastByName;
}

export interface ForecastByNameVariables {
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
