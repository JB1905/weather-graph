import { checkInRange } from '.';

describe('checkInRange', () => {
  jest.spyOn(Date, 'now').mockImplementation(() => 1479427200000);

  it.each([
    [1000000000, 2000000000, true],
    [2000000000, 3000000000, false],
  ])(
    'should check range from $start to $end with result $expected',
    (start, end, expected) => {
      expect(checkInRange(start, end)).toBe(expected);
    }
  );
});
