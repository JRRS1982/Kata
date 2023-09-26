import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const input: number[] = [-1, 0, 1, 2, -1, -4];
    const result = index(input);
    expect(result).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });
  it("should pass test case two", () => {
    const input: number[] = [0, 1, 1];
    const result = index(input);
    expect(result).toEqual([]);
  });
  it("should pass test case three", () => {
    const input: number[] = [0, 0, 0];
    const result = index(input);
    expect(result).toEqual([[0, 0, 0]]);
  });
  it("should pass test case four", () => {
    const input: number[] = [1, 2, -1, 0];
    const result = index(input);
    expect(result).toEqual([[-1, 0, 1]]);
  });
});
