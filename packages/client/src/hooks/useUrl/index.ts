export const useUrl = () => {
  const formatUrl = (url: string) => {
    return url.toLowerCase().replace(/ /g, '-');
  };

  const parseUrl = (url: string) => {
    return url.replace(/-/g, ' ');
  };

  return { formatUrl, parseUrl };
};
