import { renderHook } from '@testing-library/react-hooks';

import { useFavorite } from '.';

describe('useFavorite', () => {
  const { result } = renderHook(() => useFavorite());

  it('should', () => {
    expect(result.current);
  });
});
