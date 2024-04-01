import subsets from './subsets';

describe('subsets', () => {
  it('handle an empty input', () => {
    expect(subsets([])).toEqual([[]]);
  });
  it('should return an array of options when given one input', () => {
    expect(subsets([4])).toEqual([[], [4]]);
  });
  it('should return an array of options when given two inputs', () => {
    expect(subsets([1, 2])).toEqual([[], [1], [1, 2], [2]]);
  });
});