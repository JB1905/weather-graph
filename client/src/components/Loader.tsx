import React from 'react';
import { BeatLoader } from 'react-spinners';

import { theme } from 'constants/theme';

const Loader = ({ color = theme.colors.text }) => <BeatLoader color={color} />;

export default Loader;
