import replaceElements from "./index";

describe("replaceWithGreatestOnRHS", () => {
  it("should pass test case one", () => {
    const input = [17, 18, 5, 4, 6, 1];
    const output = [18, 6, 6, 6, 1, -1];
    const result = replaceElements(input);
    expect(result).toEqual(output);
  });
  it("should pass test case two", () => {
    const input = [400];
    const output = [-1];
    const result = replaceElements(input);
    expect(result).toEqual(output);
  });
  it("should pass my test case 1", () => {
    const input: number[] = [1, 2, 3];
    const output: number[] = [3, 3, -1];
    const result = replaceElements(input);
    expect(result).toEqual(output);
  });
  it("should pass my test case 2", () => {
    const input = [-1, 2, 4, 0, 1, 2];
    const output = [4, 4, 2, 2, 2, -1];
    const result = replaceElements(input);
    expect(result).toEqual(output);
  });
  it("should pass my test case 4", () => {
    const input = [4, 3, 2, 1, 0];
    const output = [3, 2, 1, 0, -1];
    const result = replaceElements(input);
    expect(result).toEqual(output);
  });
});
