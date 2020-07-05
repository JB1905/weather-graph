import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render App component', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('app-layout')).toBeInTheDocument();
    expect(getByTestId('app-header')).toBeInTheDocument();
    expect(getByTestId('app-logo')).toBeInTheDocument();
    expect(getByTestId('app-main')).toBeInTheDocument();
  });
});
