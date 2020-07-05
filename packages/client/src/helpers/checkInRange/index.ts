export const checkInRange = (start: number, end: number) => {
  const now = Date.now();

  return now >= start * 1000 && now <= end * 1000;
};
