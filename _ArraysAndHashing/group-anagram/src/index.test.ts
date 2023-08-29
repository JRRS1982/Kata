import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result).toEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
  });
  it("should pass test case two", () => {
    const result = index([""]);
    expect(result).toEqual([[""]]);
  });
  it("should pass test case three", () => {
    const result = index(["a", "b"]);
    expect(result).toEqual([["a"], ["b"]]);
  });
});
