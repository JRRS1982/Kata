import findDisappearedNumbers from "./index";

describe("findDisappearedNumbers", () => {
  it("should pass test case one", () => {
    const input: number[] = [4,3,2,7,8,2,3,1];
    const result = findDisappearedNumbers(input);
    expect(result).toEqual([5,6]);
  });
  it("should pass test case two", () => {
    const input: number[] = [1,1];
    const result = findDisappearedNumbers(input);
    expect(result).toEqual([2]);
  });
});
