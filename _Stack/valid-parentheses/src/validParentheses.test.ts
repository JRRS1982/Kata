import validParentheses from "./validParentheses";

describe("validParentheses", () => {
  it("should pass test case one", () => {
    const result = validParentheses("()");
    expect(result).toEqual(true);
  });
  it("should pass test case two", () => {
    const result = validParentheses("()[]{}");
    expect(result).toEqual(true);
  });
  it("should pass test case three", () => {
    const result = validParentheses("(]");
    expect(result).toEqual(false);
  });
});
