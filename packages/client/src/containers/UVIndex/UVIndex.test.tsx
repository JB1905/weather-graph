import React from 'react';
import { render } from '@testing-library/react';

import UVIndex from '.';

const mockedProps = {
  lat: 10,
  lon: 20,
};

describe('UVIndex', () => {
  it('should', () => {
    const { getByTestId } = render(<UVIndex {...mockedProps} />);

    expect(getByTestId(''));
  });
});
