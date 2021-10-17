import containsDuplicate from "./containsDuplicate";

describe("containsDuplicate", () => {
  it("should pass test case one", () => {
    const input: number[] = [1, 2, 3, 1];
    const result = containsDuplicate(input);
    expect(result).toEqual(true);
  });

  it("should pass test case two", () => {
    const input: number[] = [1, 2, 3, 4];
    const result = containsDuplicate(input);
    expect(result).toEqual(false);
  });

  it("should pass test case three", () => {
    const input: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const result = containsDuplicate(input);
    expect(result).toEqual(true);
  });
});
