import { removeElement } from "./removeElement";

describe("removeElement", () => {
  it("should pass test case one", () => {
    const nums = [3, 2, 2, 3],
      val = 3;
    removeElement(nums, val);
    expect(nums).toEqual([2, 2, null, null]);
  });

  it("should pass test case two", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2],
      val = 2;
    removeElement(nums, val);
    expect(nums).toEqual([0, 1, 3, 0, 4, null, null, null]);
  });
});
