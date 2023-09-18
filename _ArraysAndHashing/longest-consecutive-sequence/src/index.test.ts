import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index([100,4,200,1,3,2]);
    expect(result).toEqual(4); // [1,2,3,4]
  });
  it("should pass test case two", () => {
    const result = index([0,3,7,2,5,8,4,6,0,1]);
    expect(result).toEqual(9); // [0,1,2,3,4,5,6,7,8]
  });
  it("should pass test case three", () => {
    const input: number[] = [2,2,3,1];
    const result = index(input);
    expect(result).toEqual(3); // [1,2,3]
  });
});
