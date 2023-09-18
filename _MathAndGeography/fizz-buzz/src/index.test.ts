import index from "./index";

describe("index", () => {
  it("should pass test case one", () => {
    const result = index(3);
    expect(result).toEqual(["1", "2", "Fizz"]);
  });
  it("should pass test case two", () => {
    const result = index(5);
    expect(result).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("should pass test case three", () => {
    const result = index(15);
    expect(result).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
