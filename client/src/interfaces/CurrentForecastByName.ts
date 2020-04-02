export default interface CurrentForecastByName {
  name: string;
  id: string;
  coord: {
    lat: number;
    lon: number;
  };
}
