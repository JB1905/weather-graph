export const useUrl = () => {
  const parseUrl = (url: string) => {
    return url.toLowerCase().replace(' ', '-');
  };

  return { parseUrl };
};
