export const LAYERS = [
  'clouds_new',
  'precipitation_new',
  'pressure_new',
  'temp_new',
];

export const RASTER_SOURCE_OPTIONS = {
  type: 'raster',
  // tiles: [
  //   `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_WEATHER_CLIENT_ID}`,
  // ],
  tileSize: 256,
};
