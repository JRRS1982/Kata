import thirdMax from "./index";

describe("thirdMax", () => {
  it("should pass test case one", () => {
    const input: number[] = [3,2,1];
    const result = thirdMax(input);
    expect(result).toEqual(1);
  });
  it("should pass test case two", () => {
    const input: number[] = [1,2];
    const result = thirdMax(input);
    expect(result).toEqual(2);
  });
  it("should pass test case three", () => {
    const input: number[] = [2,2,3,1];
    const result = thirdMax(input);
    expect(result).toEqual(1);
  });
  it("should pass failed test case one", () => {
    const input: number[] = [3,3,4,3,4,3,0,3,3]
    const result = thirdMax(input);
    expect(result).toEqual(0);
  });
});
