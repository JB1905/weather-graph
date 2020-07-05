import React from 'react';
import { render } from '@testing-library/react';

import Maps from '.';

const mockedProps = {
  lat: 10,
  lon: 20,
};

describe('Maps', () => {
  it('should render Maps component', () => {
    const { container } = render(<Maps {...mockedProps} />);
  });
});
