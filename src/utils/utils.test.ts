import {formatter} from './utils';

describe('Util function', () => {
  test('formats currencies', () => {
    expect(formatter(23900)).toBe('$23,900');
  });
});
