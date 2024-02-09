import { mergeSortedArray } from "./mergeSortedArray";

describe("mergeSortedArray", () => {
  it("should correctly resolve test 1", () => {
    let nums1 = [1, 2, 3, 0, 0, 0],
      m = 3,
      nums2 = [2, 5, 6],
      n = 3;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });
  it("should correctly resolve test 2", () => {
    let nums1 = [1],
      m = 1,
      nums2: number[] = [],
      n = 0;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });
  it("should correctly resolve test 3", () => {
    let nums1 = [0],
      m = 0,
      nums2 = [1],
      n = 1;

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1).toEqual([1]);
  });
});
