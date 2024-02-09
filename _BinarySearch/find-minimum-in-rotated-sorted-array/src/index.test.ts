import index from './index';

describe('index', () => {
  it('should pass test case one', () => {
    const input: number[] = [3, 4, 5, 1, 2];
    const result = index(input);
    expect(result).toEqual(1);
  });
  it('should pass test case two', () => {
    const input: number[] = [4, 5, 6, 7, 0, 1, 2];
    const result = index(input);
    expect(result).toEqual(0);
  });
  it('should pass test case three', () => {
    const input: number[] = [11, 13, 15, 17];
    const result = index(input);
    expect(result).toEqual(11);
  });
});
