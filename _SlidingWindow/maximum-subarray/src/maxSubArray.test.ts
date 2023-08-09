import { maxSubArray } from "./maxSubArray";

describe("maxSubArray", () => {
  it("should pass test case one", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it("should pass test case two", () => {
    expect(maxSubArray([1])).toEqual(1);
  });

  it("should pass test case three", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
