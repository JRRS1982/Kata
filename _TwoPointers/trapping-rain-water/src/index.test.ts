import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const input: number[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    const result = index(input);
    expect(result).toEqual(6);
  });
  it("should pass test case two", () => {
    const input: number[] = [4, 2, 0, 3, 2, 5];
    const result = index(input);
    expect(result).toEqual(9);
  });
});
