import moveZeros from "./index";

describe("moveZeros", () => {
  it("should pass test case one", () => {
    const input: number[] = [0, 1, 0, 3, 12];
    const output: number[] = [1, 3, 12, 0, 0];
    moveZeros(input);
    expect(input).toEqual(output);
  });

  it("should pass test case two", () => {
    const input: number[] = [0];
    const output: number[] = [0];
    moveZeros(input);
    expect(input).toEqual(output);
  });

  it("should pass my test case one", () => {
    const input: number[] = [0, 1, 2, 3, 4];
    const output: number[] = [1, 2, 3, 4, 0];
    moveZeros(input);
    expect(input).toEqual(output);
  });

  it("should pass my test case two", () => {
    const input: number[] = [0, 11, -1, 3, 12];
    const output: number[] = [11, -1, 3, 12, 0];
    moveZeros(input);
    expect(input).toEqual(output);
  });

  it("should pass my test case three", () => {
    const input: number[] = [];
    const output: number[] = [];
    moveZeros(input);
    expect(input).toEqual(output);
  });
});
