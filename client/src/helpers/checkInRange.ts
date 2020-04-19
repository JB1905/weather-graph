export const checkInRange = (start: number, end: number) => {
  const now = Date.now();

  // console.log(now, end * 1000);

  return now >= start * 1000 && now <= end * 1000;
};
