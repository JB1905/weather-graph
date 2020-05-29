import { renderHook } from '@testing-library/react-hooks';

import { useUrl } from '.';

describe('useUrl', () => {
  const { result } = renderHook(() => useUrl());

  it('should format URL', () => {
    expect(result.current.formatUrl('Lorem Ipsum Dolor')).toBe(
      'lorem-ipsum-dolor'
    );
  });

  it('should parse URL', () => {
    expect(result.current.parseUrl('lorem-ipsum-dolor')).toBe(
      'lorem ipsum dolor'
    );
  });
});
