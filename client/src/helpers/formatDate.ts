import td from 'two-digit';

export const formatTime = (stamp: number) => {
  const date = new Date(stamp);

  const hours = td(date.getHours() + 1);
  const minutes = td(date.getMinutes());

  return `${hours}:${minutes}`;
};
