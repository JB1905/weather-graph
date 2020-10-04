import React, { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';

interface Props {
  readonly color?: string;
}

const Loader = ({ color }: Props) => {
  const theme = useContext(ThemeContext);

  return <BeatLoader color={color || theme.colors.text} />;
};

export default Loader;
