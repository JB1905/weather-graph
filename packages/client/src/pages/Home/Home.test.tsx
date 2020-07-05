import React from 'react';
import { render } from '@testing-library/react';

import Home from '.';

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: {} as any,
};

jest.mock('hooks/useFavorite', () => ({
  useFavorite: () => ({
    favorites: [],
  }),
}));

describe('Home', () => {
  it('should render Home component without favorites', () => {
    const { getByTestId } = render(<Home {...routeComponentPropsMock} />);

    expect(getByTestId('app-title')).toBeInTheDocument();
  });
});

// jest.mock('hooks/useFavorite', () => ({
//   useFavorite: () => ({
//     favorites: ['1', '2', '3'],
//   }),
// }));

// jest.mock('containers/FavoriteList', () => <></>);

// describe('Home', () => {
//   it('should render Home component with favorites', () => {
//     const { getByTestId } = render(<Home {...routeComponentPropsMock} />);

//     expect(getByTestId('favorite-list')).toBeInTheDocument();
//   });
// });
