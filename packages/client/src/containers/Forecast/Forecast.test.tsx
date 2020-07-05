import React from 'react';
import { render } from '@testing-library/react';

import Forecast from '.';

describe('Forecast', () => {
  it('should render Forecast component', () => {
    const { container } = render(<Forecast />);
  });
});
