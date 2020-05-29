import { renderHook } from '@testing-library/react-hooks';

import { useGeolocation } from '.';

describe('useGeolocation', () => {
  const { result } = renderHook(() => useGeolocation());

  it('should', () => {
    // expect(result.current)
  });
});
