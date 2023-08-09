# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

### Learning

TLDR a Hash Map is used  

These are the starting values
[ 3, 2, 4], target = 6, map = {}

There is nothing in the map already so we miss the if statement. We save to the map the key i.e. the value from the numbers array and its index (zero). 
  i
[ 3, 2, 4], target = 6, difference = 3, map = {3: 0}

Again map does not contain the difference, a 4 as a key (we use map.has which checks keys) so it adds 2 and its index of 1.
     i
[ 3, 2, 4], target = 6, difference = 4, map = {3: 0, 2: 1}

The difference is now 2, and there is a two in the map... so we return.
        i
[ 3, 2, 4], target = 6, difference = 2, return [1, 2]
