import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index([1, 1, 1, 2, 2, 3], 2);
    expect(result).toEqual([1, 2]);
  });
  it("should pass test case two", () => {
    const result = index([1, 2, 2, 2, 3, 3, 3, 3], 2);
    expect(result).toEqual([2, 3]);
  });
  it("should pass test case three", () => {
    const result = index([1], 1);
    expect(result).toEqual([1]);
  });
  it("should pass test case four", () => {
    const result = index([4, 1, -1, 2, -1, 2, 3], 2);
    expect(result).toEqual([-1, 2]);
  });
});
