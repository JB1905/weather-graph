export const localTime = (date: Date, timeZone?: string) => {
  return new Intl.DateTimeFormat('default', {
    timeZone,
    hour: 'numeric',
    minute: 'numeric'
  }).format(date);
};
