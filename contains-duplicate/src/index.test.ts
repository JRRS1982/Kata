import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const input: number[] = [3,2,1];
    const result = index(input);
    expect(result).toEqual(1);
  });

  it("should pass test case two", () => {
    const input: number[] = [1,2];
    const result = index(input);
    expect(result).toEqual(2);
  });
  
  it("should pass test case three", () => {
    const input: number[] = [2,2,3,1];
    const result = index(input);
    expect(result).toEqual(1);
  });
});
