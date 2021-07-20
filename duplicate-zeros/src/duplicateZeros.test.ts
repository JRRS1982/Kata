import { duplicateZeros } from "./index";
describe("duplicateZeros", () => {
  it("should duplicate one zero and move number to the right", () => {
    let input = [0, 1];
    duplicateZeros(input);
    expect(input).toEqual([0, 0]);
  });

  it("should duplicate one zero and move number to the right", () => {
    let input = [1, 0, 2, 3, 0, 4, 5, 0];
    duplicateZeros(input);
    expect(input).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
  });

  it("should duplicate one zero and move number to the right", () => {
    let input = [1, 2, 3];
    duplicateZeros(input);
    expect(input).toEqual([1, 2, 3]);
  });
});
