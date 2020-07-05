import React from 'react';
import { render } from '@testing-library/react';

import Details from '.';

describe('Details', () => {
  it('should render Details component', () => {
    const { container } = render(<Details />);
  });
});
