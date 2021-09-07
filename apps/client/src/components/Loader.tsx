import { memo } from 'react';
import { BeatLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';
import { useSafeContext } from 'react-safe-context-hooks';

// TODO interface
type LoaderProps = {
  readonly color?: string;
};

const Loader = (({ color }: LoaderProps) => {
  const theme = useSafeContext(ThemeContext); // TODO use theme

  return <BeatLoader color={color || theme.colors.text} />;
});

export default Loader;
