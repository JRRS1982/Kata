import { reverseInteger } from "./reverseInteger";

describe("reverseInteger", () => {
  it("reverses a regular number", () => {
    expect(reverseInteger(123)).toEqual(321);
  });
  it("reverses a negative number", () => {
    expect(reverseInteger(-123)).toEqual(-321);
  });
  it("reverses a number with zero on the end... but removes the zero", () => {
    expect(reverseInteger(120)).toEqual(21);
  });
  it("returns zero", () => {
    expect(reverseInteger(0)).toEqual(0);
  });
  it("returns zero if outside 32-bit integer range", () => {
    expect(reverseInteger(2147483648)).toEqual(0);
  });
  it("returns zero if outside negative 32-bit integer range", () => {
    expect(reverseInteger(-2147483649)).toEqual(0);
  });
  it("returns max of 32-bit integer range", () => {
    expect(reverseInteger(2147483647)).toEqual(0);
  });
  it("returns negative max of 32-bit integer range", () => {
    expect(reverseInteger(-2147483647)).toEqual(0);
  });
  it("failing test case from leet code 1", () => {
    expect(reverseInteger(1534236469)).toEqual(0);
  });
});