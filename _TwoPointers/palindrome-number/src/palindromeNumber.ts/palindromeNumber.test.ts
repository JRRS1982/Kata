import { palindromeNumber } from "./palindromeNumber";

describe("palindromeNumber", () => {
  it("should validate 121 as true", () => {
    expect(palindromeNumber(121)).toBe(true);
  });

  it("should validate 10 as false", () => {
    expect(palindromeNumber(10)).toBe(false);
  });

  it("should validate -121 as false", () => {
    expect(palindromeNumber(-121)).toBe(false);
  });
});
