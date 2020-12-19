export const localTime = (date: any) => {
  // TODO
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Australia/Sydney',
  }).format(date);
};
