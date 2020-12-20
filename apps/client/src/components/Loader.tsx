import { memo } from 'react';
import { BeatLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';
import { useSafeContext } from 'react-safe-context-hooks';

type LoaderProps = {
  readonly color?: string;
};

const Loader = memo<LoaderProps>(({ color }) => {
  const theme = useSafeContext(ThemeContext);

  return <BeatLoader color={color || theme.colors.text} />;
});

export default Loader;
