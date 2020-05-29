import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render App component', () => {
    const { container } = render(<App />);

    expect(container);
  });
});
