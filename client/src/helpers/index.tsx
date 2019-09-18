import tuc from 'temp-units-conv';

export const sm = '680px';

export const roundTemperature = (temperature: number) => {
  return `${Math.round(temperature)}ºC`;
};

export const toUnit = (temperature: number, unit: 'C' | 'F' = 'C') => {
  window.localStorage.setItem('unit', unit);

  return unit === 'C' ? tuc.k2c(temperature) : tuc.k2f(temperature);
};

export const getUnit = () => window.localStorage.getItem('unit');

export const setUnit = (unit: 'C' | 'F' = 'C') => {
  window.localStorage.setItem('unit', unit);
};

export const setBackground = (weather: string, isNight?: boolean) => {
  let colors: string[] = [];

  switch (weather) {
    case 'scattered clouds':
      colors = ['#aac9fa', '#8b9ed6'];

      break;

    case 'clear sky':
      colors = ['#03b1fc', '#0380fc'];

      break;

    case 'overcast clouds':
      colors = ['#708494', '#707a94'];

      break;

    case 'broken clouds':
      colors = ['#6572ab', '#6665ab'];

      break;

    case 'few clouds':
      colors = ['#5c81fa', '#707a94'];

      break;

    case 'light rain':
      colors = ['#28506b', '#b8c7d1'];

      break;

    case 'moderate rain':
      break;

    default:
      break;
  }

  return colors;
};
