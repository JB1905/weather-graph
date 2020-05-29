import { renderHook } from '@testing-library/react-hooks';

import { useUnits } from '.';

describe('useUnits', () => {
  const { result } = renderHook(() => useUnits());

  it('should', () => {
    // expect(result.current)
  });
});
