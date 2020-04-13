export const checkInRange = (start: any, end: any) => {
  const now = Date.now();

  console.log(now, end * 1000);

  return now >= start * 1000 && now <= end * 1000;
};
