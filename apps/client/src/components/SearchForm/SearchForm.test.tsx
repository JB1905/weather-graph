import { render, fireEvent } from '@testing-library/react';

import SearchForm from '.';

describe('SearchForm', () => {
  // TODO handleSubmit?
  const onSubmit = jest.fn();

  const { container } = render(<SearchForm onSubmit={onSubmit} />);

  it('should render SearchForm matching snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should call onSubmit callback', () => {
    const searchForm = container.getElementsByTagName('input')[0];

    const sbmButton = container.getElementsByTagName('button')[0];

    const inputValue = 'paris';

    searchForm.value = inputValue;

    fireEvent.click(sbmButton);

    expect(onSubmit).toHaveBeenCalledWith(inputValue);
  });

  it('should not call onSubmit callback', () => {
    const searchForm = container.getElementsByTagName('input')[0];

    const sbmButton = container.getElementsByTagName('button')[0];

    searchForm.value = '';

    fireEvent.click(sbmButton);

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('should call onSubmit callback', () => {
    const searchForm = container.getElementsByTagName('input')[0];

    const inputValue = 'paris';

    searchForm.value = inputValue;

    fireEvent.keyPress(searchForm, {
      key: 'Enter',
      code: 'Enter',
    });

    expect(onSubmit).toHaveBeenCalledWith(inputValue);
  });
});
