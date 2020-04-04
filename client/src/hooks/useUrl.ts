export const useUrl = () => {
  const formatUrl = (url: string) => {
    return url.toLowerCase().replace(' ', '-');
  };

  const parseUrl = (url: string) => {
    return url.replace('-', ' ');
  };

  return { formatUrl, parseUrl };
};
