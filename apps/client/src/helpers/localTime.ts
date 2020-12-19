export const localTime = (date: any) => {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Australia/Sydney',
  }).format(date);
};
