/**
 * subsets recursive solution
 * @param nums
 * @returns
 * @description Given an integer array nums of unique elements, return all possible subsets (the power set).
 */
const subsets = (nums: number[]) => {
  const result: number[][] = [];

  /**
   * @name backtrack
   * @param start - the starting index of the current subset,
   * @param current - the current subset
   * @description A recursive function that generates all possible subsets of the input array
   * @returns {void}
   *
   * Time complexity: O(2^n) as there are 2^n possible subsets for a given array of n elements i.e. if n is 3 then 2x2x2 = 8 subsets
   *
   * Space complexity: O(n) as the recursion stack can go as deep as the number of elements in the input array
   */
  function backtrack(start: number, current: number[]) {
      // Add this the current subset to the result array as a new subset, so the first would be [], then [1], then [1,2], then [1,2,3] etc. in the case of nums = [1,2,3]
      result.push([...current]);

      // Explore all possible subsets by backtracking from the index of the current element in nums
      for (let i = start; i < nums.length; i++) {
          // Add the element to the subset, so current is larger i.e. [1], then [1,2], then [1,2,3] etc. as you traverse the tree downwards
          current.push(nums[i]);

          /**
           * the recursion starts - the current is now one level lower in the tree and the start index is now the NEXT INDEX in the array
           */
          backtrack(i + 1, current);


          /**
           * THE BACKTRACK (exclude the current element)
           * - The recursive call is complete for the current element, so remove it from the current subset to explore the next possible subset.
           */
          current.pop();
      }
  }

  // Start backtracking from index zero with an empty subset
  backtrack(0, []);

  return result;
}

export default subsets;