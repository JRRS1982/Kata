import index from './index';

describe('index', () => {
  it('should pass test case one', () => {
    const input: number[] = [2, 7, 11, 15];
    const result = index(input, 9);
    expect(result).toEqual([1, 2]);
  });
  it('should pass test case two', () => {
    const input: number[] = [2, 3, 4];
    const result = index(input, 6);
    expect(result).toEqual([1, 3]);
  });
  it('should pass test case three', () => {
    const input: number[] = [-1, 0];
    const result = index(input, -1);
    expect(result).toEqual([1, 2]);
  });
});
