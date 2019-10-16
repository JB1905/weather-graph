import tuc from 'temp-units-conv';
import Color from 'color';

export const sm = '680px';

export const roundTemperature = (temperature: number) => {
  return `${Math.round(temperature)}`;
};

const updateColor = ([...colors], isNight?: boolean) => {
  let temp = [];

  if (isNight) {
    for (let color of colors) {
      temp.push(
        Color(color)
          .darken(0.5)
          .hex()
      );
    }
  } else {
    temp = colors;
  }

  return temp;
};

export const toUnit = (temperature: number, unit: 'C' | 'F' = 'C') => {
  window.localStorage.setItem('unit', unit);

  const conversion = unit === 'C' ? tuc.k2c(temperature) : tuc.k2f(temperature);

  return Math.round(conversion);
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
      colors = ['#03b1fc', '#0380fc']

      break;

    case 'heavy intensity rain':
    case 'overcast clouds':
      colors = ['#708494', '#707a94'];

      break;

    case 'broken clouds':
      colors = ['#6572ab', '#6665ab'];

      break;

    case 'light snow':
    case 'few clouds':
      colors = ['#5c81fa', '#707a94'];

      break;

    case 'light rain':
      colors = ['#28506b', '#b8c7d1'];

      break;

    case 'fog':
    case 'moderate rain':
      break;

    default:
      colors = ['#4844eb', '#0400ba'];

      break;
  }

  return updateColor(colors, isNight);
};
