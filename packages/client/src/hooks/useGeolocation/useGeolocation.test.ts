import { renderHook, act } from '@testing-library/react-hooks';

import { useGeolocation } from '.';

const mockGeolocation = {
  getCurrentPosition: jest.fn(),
  watchPosition: jest.fn(),
};

(global.navigator as any).geolocation = undefined;

describe('useGeolocation', () => {
  it('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(false);
  });

  it('should', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current.isGeolocationAvailable).toBe(true);

    const callback = jest.fn();

    act(() => {
      result.current.getCoords(callback);
    });

    expect(callback).toHaveBeenCalledWith(2);
  });
});
