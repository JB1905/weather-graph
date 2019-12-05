import Color from 'color';

import { Weather } from '../types/Weather';

const updateColor = (colors: string[], isNight?: boolean) => {
  if (isNight) {
    colors = colors.map(color =>
      Color(color)
        .darken(0.5)
        .hex()
    );
  }

  return colors;
};

export const setBackground = (weather: Weather, isNight?: boolean) => {
  const colors = {
    'scattered clouds': ['#aac9fa', '#8b9ed6'],
    'clear sky': ['#03b1fc', '#0380fc'],
    'heavy intensity rain': ['#708494', '#707a94'],
    'very heavy rain': ['#708494', '#707a94'],
    'overcast clouds': ['#708494', '#707a94'],
    'broken clouds': ['#6572ab', '#6665ab'],
    'light snow': ['#5c81fa', '#707a94'],
    'few clouds': ['#5c81fa', '#707a94'],
    'light rain': ['#28506b', '#b8c7d1'],
    'shower rain': ['#28506b', '#b8c7d1'],
    fog: ['#28506b', '#b8c7d1'],
    'moderate rain': ['#28506b', '#b8c7d1'],
    smoke: ['#000', '#3f403f']
  };

  if (weather) {
    return updateColor(colors[weather] || ['#4844eb', '#0400ba'], isNight);
  }
};
