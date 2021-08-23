import { sortArrayByParity } from "./index";

describe("sortArrayByParity", () => {
  it("should pass test case one", () => {
    let nums: number[] = [3, 1, 2, 4];
    const result = [4, 2, 3, 1];
    sortArrayByParity(nums);
    expect(nums).toEqual(result);
  });
  it("should pass test case two", () => {
    let nums: number[] = [0];
    const result = [0];
    sortArrayByParity(nums);
    expect(nums).toEqual(result);
  });
  it("should pass test case three", () => {
    let nums: number[] = [1, 2, 3, 4, 5];
    const result = [4, 2, 1, 3, 5];
    sortArrayByParity(nums);
    expect(nums).toEqual(result);
  });
  it("should pass test case four", () => {
    let nums: number[] = [5, 4, 3, 2, 1];
    const result = [2, 4, 5, 3, 1];
    sortArrayByParity(nums);
    expect(nums).toEqual(result);
  });
});
