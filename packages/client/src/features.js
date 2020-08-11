const featureFlags = {
  today: true,
  forecast: false,
  uvIndex: false,
  airPollution: false,
  maps: false,
  favorites: true,
  reload: true,
  info: false,
  minMaxTemp: false,
  backgroundChange: false,
  weatherAnimation: false,
};

export const isFeatureEnabled = (name) => featureFlags[name];
export const setFeature = (name, status) => (featureFlags[name] = status);
export const getAll = () => featureFlags;
