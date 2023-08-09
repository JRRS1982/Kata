import lengthOfLongestSubstring from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const input: string  = "abcabcbb";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(3);
  });
  it("should pass test case two", () => {
    const input: string = "bbbbb";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(1);
  });
  it("should pass test case three", () => {
    const input: string = "pwwkew";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(3);
  });
  it("should pass test case four", () => {
    const input: string = "abcab";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(3);
  });
  it("should pass test case five", () => {
    const input: string = "";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(0);
  });
  it("should pass test case six", () => {
    const input: string = "xxzqi";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(4);
  });
  it("should pass test case seven", () => {
    const input: string = "abcd";
    const result = lengthOfLongestSubstring(input);
    expect(result).toEqual(4);
  });
});
