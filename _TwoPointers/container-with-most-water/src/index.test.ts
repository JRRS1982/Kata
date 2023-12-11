import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const input: number[] = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const result = index(input);
    expect(result).toEqual(49);
  });
  it("should pass test case two", () => {
    const input: number[] = [1,1];
    const result = index(input);
    expect(result).toEqual(1);
  });
  it("should pass test case three", () => {
    const input: number[] = [2, 3, 2];
    const result = index(input);
    expect(result).toEqual(6);
  });
});
