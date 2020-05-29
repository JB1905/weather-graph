import { renderHook } from '@testing-library/react-hooks';

import { useBackground } from '.';

describe('useBackground', () => {
  const { result } = renderHook(() => useBackground());

  it('should', () => {
    // expect(result.current)
  });
});
