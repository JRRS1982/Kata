import { productExceptSelf } from "./productExceptSelf";

describe("productExceptSelf", () => {
  it("pass test case one", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("pass test case two", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it("should pass fail test one", () => {
    expect(productExceptSelf([1, -1])).toEqual([-1, 1]);
  });
});
