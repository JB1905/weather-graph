import React from 'react';
import { render } from '@testing-library/react';

import TemperatureSwitch from '.';

describe('TemperatureSwitch', () => {
  it('should', () => {
    const { getByTestId } = render(<TemperatureSwitch />);

    expect(getByTestId(''));
  });
});
