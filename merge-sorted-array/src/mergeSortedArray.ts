export const mergeSortedArray = (nums1: number[], m: number, nums2: number[], n: number): void => {
  nums1.splice(m, nums1.length);
  nums2.splice(n, nums2.length);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};
