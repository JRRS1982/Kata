import { findNumbers } from "./findNumbers";

describe("findNumbers", () => {
  it('should return 0 if passed an empty array', () => {
    expect(findNumbers([])).toEqual(0);
  });
  it('should return 0 if passed an array with no evens', () => {
    expect(findNumbers([1, 123, 234])).toEqual(0);
  });
  it('should return 1 if passed an array with one even number', () => {
    expect(findNumbers([12, 134, 154])).toEqual(1);
  });
  it('should return 1 if passed an array with event number elsewhere in array', () => {
    expect(findNumbers([123, 1234, 411])).toEqual(1);
  });
  it('should return 2 if passed an array with multiple even numbers', () => {
    expect(findNumbers([123, 1234, 411, 1235])).toEqual(2);
  });
});
