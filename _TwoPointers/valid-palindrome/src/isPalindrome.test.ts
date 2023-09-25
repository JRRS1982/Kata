import isPalindrome from "./isPalindrome";

describe("isPalindrome", () => {
  it("should pass test case one", () => {
    const result = isPalindrome("A man, a plan, a canal: Panama");
    expect(result).toEqual(true);
  });
  it("should pass test case two", () => {
    const result = isPalindrome("race a car");
    expect(result).toEqual(false);
  });
  it("should pass test case three", () => {
    const result = isPalindrome(" ");
    expect(result).toEqual(true);
  });
});
