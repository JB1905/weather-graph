import React from 'react';
import { render } from '@testing-library/react';

import FavoriteList from '.';

describe('FavoriteList', () => {
  it('should render FavoriteList component', () => {
    const { container } = render(<FavoriteList />);
  });
});
