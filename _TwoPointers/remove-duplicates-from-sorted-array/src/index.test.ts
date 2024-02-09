import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("should pass test case 1", () => {
    let numbers = [1, 1, 2];
    const result = removeDuplicates(numbers);
    expect(result).toEqual(2);
    expect(numbers).toEqual([1, 2, null]);
  });
  it("should pass test case 2", () => {
    let numbers = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const result = removeDuplicates(numbers);
    expect(result).toEqual(5);
    expect(numbers).toEqual([0, 1, 2, 3, 4, null, null, null, null, null]);
  });
});
