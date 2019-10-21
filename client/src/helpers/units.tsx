import tuc from 'temp-units-conv';

export const toUnit = (temperature: number, unit: 'C' | 'F' = 'C') => {
  window.localStorage.setItem('unit', unit);

  const conversion = unit === 'C' ? tuc.k2c(temperature) : tuc.k2f(temperature);

  return Math.round(conversion);
};

export const getUnit = () => window.localStorage.getItem('unit');

export const setUnit = (unit: 'C' | 'F' = 'C') => {
  window.localStorage.setItem('unit', unit);
};
