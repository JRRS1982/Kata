import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index("foo", "oof");
    expect(result).toEqual(true);
  });
  it("should pass test case two", () => {
    const result = index("aaa", "");
    expect(result).toEqual(false);
  });
  it("should pass test case three", () => {
    const result = index("asfasd", "asfasd");
    expect(result).toEqual(true);
  });
  it("should pass test case three", () => {
    const result = index("1abc", "abc");
    expect(result).toEqual(false);
  });
});
