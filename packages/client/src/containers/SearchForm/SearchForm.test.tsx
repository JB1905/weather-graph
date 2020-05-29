import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchForm from '.';

describe('SearchForm', () => {
  const onSubmit = jest.fn();

  const { container } = render(<SearchForm onSubmit={onSubmit} />);

  it('should render SearchForm matching snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit callback', () => {
    const searchForm = container.getElementsByTagName('input')[0];

    const sbmButton = container.getElementsByTagName('button')[0];

    searchForm.value = 'paris';

    fireEvent.click(sbmButton);

    expect(onSubmit).toHaveBeenCalled();
  });

  // it('should not call onSubmit callback', () => {
  //   const searchForm = container.getElementsByTagName('input')[0];

  //   const sbmButton = container.getElementsByTagName('button')[0];

  //   searchForm.value = '';

  //   fireEvent.click(sbmButton);

  //   expect(onSubmit).not.toHaveBeenCalled();
  // });

  // it('should not call onSubmit callback', () => {
  //   const searchForm = container.getElementsByTagName('input')[0];

  //   searchForm.value = 'paris';

  //   fireEvent.keyPress(searchForm, {
  //     key: 'Enter',
  //     code: 'Enter',
  //   });

  //   expect(onSubmit).toHaveBeenCalled();
  // });
});
