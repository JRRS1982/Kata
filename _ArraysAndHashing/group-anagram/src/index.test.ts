import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index(["eat", "tea", "tan", "ate", "nat", "bat"]);
    // Sort both result and expected to compare regardless of order
    const sortedResult = result.map((group) => group.sort()).sort();
    const expected = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
      .map((group) => group.sort())
      .sort();
    expect(sortedResult).toEqual(expected);
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
