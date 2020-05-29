import React, { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';

interface Props {
  readonly color?: string;
}

const Loader: React.FC<Props> = ({ color }) => {
  const theme = useContext(ThemeContext);

  return <BeatLoader color={color || theme.colors.text} />;
};

export default Loader;
