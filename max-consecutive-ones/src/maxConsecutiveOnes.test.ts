import { maxConsecutiveOnes } from "./maxConsecutiveOnes";

describe("maxConsecutiveOnes", () => {
  it("should output 1 if array contains a 1", () => {
    expect(maxConsecutiveOnes([1])).toEqual(1);
  });
  it("should output 2", () => {
    expect(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
  });
  it("should output 3", () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toEqual(3);
  });
  it("should output 2 ", () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1])).toEqual(2);
  });
});
