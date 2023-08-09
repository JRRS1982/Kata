import { twoSum } from "./twoSum";

describe("twoSum", () => {
  it("should pass test case one", () => {
    const input: number[] = [2, 7, 11, 15];
    const result = twoSum(input, 9);
    expect(result).toEqual([0, 1]);
  });
  it("should pass test case two", () => {
    const input: number[] = [3, 2, 4];
    const result = twoSum(input, 6);
    expect(result).toEqual([1, 2]);
  });
  it("should pass test case three", () => {
    const input: number[] = [3, 3];
    const result = twoSum(input, 6);
    expect(result).toEqual([0, 1]);
  });
  it("should pass my test case", () => {
    const input: number[] = [6, 2, 3];
    const result = twoSum(input, 5);
    expect(result).toEqual([1, 2]);
  });
  it("should consider if its not included", () => {
    const input: number[] = [6, 2, 3];
    const result = twoSum(input, 12);
    expect(result).toEqual(null);
  });
});
