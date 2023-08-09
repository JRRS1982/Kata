import { checkIfExists } from "./index";

describe("checkIfExists", () => {
  it("should pass the first test case", () => {
    let arr = [10, 2, 5, 3];
    let result = checkIfExists(arr);
    expect(result).toEqual(true);
  });
  it("should pass the second test case", () => {
    let arr = [7, 1, 14, 11];
    let result = checkIfExists(arr);
    expect(result).toEqual(true);
  });
  it("should pass the third test case", () => {
    let arr = [3, 1, 7, 11];
    let result = checkIfExists(arr);
    expect(result).toEqual(false);
  });
});
