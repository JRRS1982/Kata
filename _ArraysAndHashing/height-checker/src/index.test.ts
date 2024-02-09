import heightChecker from "./index";

describe("heightChecker", () => {
  it("should pass test case one", () => {
    const input: number[] = [1, 1, 4, 2, 1, 3];
    const result = heightChecker(input);
    expect(result).toEqual(3);
  });

  it("should pass test case two", () => {
    const input: number[] = [5,1,2,3,4];
    const result = heightChecker(input);
    expect(result).toEqual(5);
  });
  it("should pass test case three", () => {
    const input: number[] = [1,2,3,4,5];
    const result = heightChecker(input);
    expect(result).toEqual(0);
  });
  it("should pass failed test case one", () => {
    const input: number[] = [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7];
    const result = heightChecker(input);
    expect(result).toEqual(22);
  });
});
