# Algorithm Patterns Reference

Your single source of truth for pattern recognition and implementation. Each pattern follows: **What → How → Why**.

---

## 1. Sliding Window

### What is Sliding Window?

Maintains a window of elements in an array/string, expanding or contracting based on conditions to find optimal subarrays.

### How is Sliding Window implemented?

**Template (Variable Window)**:

```typescript
const slidingWindow = (arr: number[], target: number): number => {
  let left = 0;
  let result = 0;
  let windowState = 0; // sum, count, map, etc.

  for (let right = 0; right < arr.length; right++) {
    windowState += arr[right]; // Expand window

    while (windowState >= target) { // Shrink while condition met
      result = Math.max(result, right - left + 1);
      windowState -= arr[left];
      left++;
    }
  }
  return result;
};
```

**Template (Fixed Window)**:

```typescript
const fixedWindow = (arr: number[], k: number): number => {
  let windowSum = 0;

  for (let i = 0; i < k; i++) windowSum += arr[i]; // Initial window
  let maxSum = windowSum;

  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // Slide
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
};
```

### Why is Sliding Window used?

**When to use**:

- Keywords: "substring", "subarray", "contiguous", "consecutive", "window"
- Need: Optimal contiguous sequence
- Brute force would use nested loops

**Complexity**: O(n) time, O(1) or O(k) space
**Problems**: Longest Substring Without Repeating Characters, Minimum Window Substring

---

## 2. Two Pointers

### What is Two Pointers?

Uses two pointers moving through data (same/opposite directions) to find pairs or optimize operations.

### How is Two Pointers implemented?

**Template (Opposite Direction)**:

```typescript
const twoPointers = (arr: number[], target: number): number[] => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
};
```

**Template (Same Direction - Fast/Slow)**:

```typescript
const fastSlow = (arr: number[]): number => {
  let slow = 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (condition(arr[fast])) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
      slow++;
    }
  }
  return slow;
};
```

### Why is Two Pointers used?

**When to use**:

- Keywords: "pair", "palindrome", "sorted array", "remove duplicates"
- Need: Compare elements from both ends or partition array
- Input: Sorted array (or can be sorted)

**Complexity**: O(n) time, O(1) space
**Problems**: Two Sum II, 3Sum, Container With Most Water, Valid Palindrome

---

## 3. Fast & Slow Pointers

### What is Fast & Slow Pointers?

Two pointers moving at different speeds to detect cycles or find middle elements in linked lists.

### How is Fast & Slow Pointers implemented?

```typescript
const hasCycle = (head: ListNode | null): boolean => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;        // Move 1 step
    fast = fast.next.next;   // Move 2 steps
    if (slow === fast) return true;
  }
  return false;
};
```

### Why is Fast & Slow Pointers used?

**When to use**:

- Keywords: "cycle", "middle element", "linked list"
- Need: Detect cycle or find position without counting
- Input: Linked list

**Complexity**: O(n) time, O(1) space
**Problems**: Linked List Cycle, Find Middle, Happy Number

---

## 4. Binary Search

### What is Binary Search?

Repeatedly divides sorted search space in half to find target or boundary in O(log n) time.

### How is Binary Search implemented?

**Template (Find Target)**:

```typescript
const binarySearch = (arr: number[], target: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};
```

**Template (Find Boundary)**:

```typescript
const findBoundary = (arr: number[]): number => {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (condition(arr[mid])) {
      result = mid;
      right = mid - 1; // Continue searching
    } else {
      left = mid + 1;
    }
  }
  return result;
};
```

### Why is Binary Search used?

**When to use**:

- Keywords: "sorted", "search", "find", "rotated sorted"
- Need: O(log n) search or find boundary
- Input: Sorted or rotated sorted array

**Complexity**: O(log n) time, O(1) space (iterative), O(log n) space (recursive)
**Problems**: Binary Search, Search in Rotated Sorted Array, Find Minimum in Rotated Array

---

## 5. Backtracking

### What is Backtracking?

Builds solutions incrementally, abandoning paths that don't satisfy constraints (explores decision tree).

### How is Backtracking implemented?

```typescript
const backtrack = (nums: number[]): number[][] => {
  const result: number[][] = [];
  const current: number[] = [];

  const dfs = (start: number): void => {
    result.push([...current]); // Add current solution

    for (let i = start; i < nums.length; i++) {
      current.push(nums[i]);    // Make choice
      dfs(i + 1);               // Recurse
      current.pop();            // Undo choice (backtrack)
    }
  };

  dfs(0);
  return result;
};
```

### Why is Backtracking used?

**When to use**:

- Keywords: "all combinations", "all permutations", "generate all", "subsets"
- Need: Explore all possibilities, return multiple solutions
- Output: Array of arrays

**Complexity**: O(2ⁿ) or O(n!) time, O(n) space (recursion depth)
**Problems**: Subsets, Permutations, Combination Sum, N-Queens

---

## 6. Depth-First Search (DFS)

### What is Depth-First Search (DFS)?

Explores as far as possible along each branch before backtracking (goes deep first).

### How is Depth-First Search (DFS) implemented?

**Template (Recursive)**:

```typescript
const dfs = (node: TreeNode | null): void => {
  if (node === null) return;

  console.log(node.val);  // Preorder
  dfs(node.left);
  dfs(node.right);
};
```

**Template (Iterative)**:

```typescript
const dfsIterative = (root: TreeNode | null): void => {
  if (root === null) return;
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    console.log(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};
```

### Why is Depth-First Search (DFS) used?

**When to use**:

- Keywords: "tree", "graph", "path", "connected components"
- Need: Explore all paths, traverse tree/graph
- Order matters: preorder, inorder, postorder

**Complexity**: O(V + E) time for graphs, O(n) for trees; O(h) space (h = height)
**Problems**: Maximum Depth of Binary Tree, Validate BST, Number of Islands

---

## 7. Breadth-First Search (BFS)

### What is Breadth-First Search (BFS)?

Explores all nodes at current level before moving to next level (goes wide first).

### How is Breadth-First Search (BFS) implemented?

```typescript
const bfs = (root: TreeNode | null): number[][] => {
  if (root === null) return [];
  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const level: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
};
```

### Why is Breadth-First Search (BFS) used?

**When to use**:

- Keywords: "level", "shortest path", "minimum steps", "layer"
- Need: Level-order traversal, shortest path in unweighted graph
- Process nodes by distance from start

**Complexity**: O(V + E) time, O(w) space (w = max width)
**Problems**: Binary Tree Level Order Traversal, Minimum Depth, Rotting Oranges

---

## 8. Dynamic Programming

### What is Dynamic Programming?

Breaks problem into overlapping subproblems, stores results to avoid recomputation (optimization technique).

### How is Dynamic Programming implemented?

**Template (Top-Down Memoization)**:

```typescript
const dpTopDown = (n: number): number => {
  const memo = new Map<number, number>();

  const helper = (remaining: number): number => {
    if (remaining === 0) return 1;
    if (remaining < 0) return 0;
    if (memo.has(remaining)) return memo.get(remaining)!;

    const result = helper(remaining - 1) + helper(remaining - 2);
    memo.set(remaining, result);
    return result;
  };

  return helper(n);
};
```

**Template (Bottom-Up Tabulation)**:

```typescript
const dpBottomUp = (n: number): number => {
  if (n <= 1) return 1;
  const dp: number[] = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
```

### Why is Dynamic Programming used?

**When to use**:

- Keywords: "maximum", "minimum", "count ways", "optimal"
- Need: Optimization or counting problem
- Recursive solution has repeated calculations
- Has optimal substructure and overlapping subproblems

**Complexity**: O(n) to O(n²) time, O(n) space
**Problems**: Climbing Stairs, House Robber, Coin Change, Longest Increasing Subsequence

---

## 9. Greedy

### What is Greedy?

Makes locally optimal choice at each step, hoping to find global optimum (no backtracking).

### How is Greedy implemented?

```typescript
const greedy = (intervals: number[][]): number => {
  intervals.sort((a, b) => a[1] - b[1]); // Sort by end time

  let count = 0;
  let lastEnd = -Infinity;

  for (const [start, end] of intervals) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }
  return count;
};
```

### Why is Greedy used?

**When to use**:

- Keywords: "maximum", "minimum", "optimal", "interval"
- Need: Optimization where local choice is globally optimal
- Can prove greedy choice is safe
- Often involves sorting first

**Complexity**: O(n log n) time (sorting), O(1) space
**Problems**: Jump Game, Gas Station, Non-overlapping Intervals

---

## 10. Hash Map

### What is Hash Map?

Stores key-value pairs for O(1) average-case lookups, insertions, and deletions.

### How is Hash Map implemented?

```typescript
// Frequency counting
const frequencyMap = (arr: number[]): Map<number, number> => {
  const map = new Map<number, number>();
  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
};

// Two Sum pattern
const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement)!, i];
    map.set(nums[i], i);
  }
  return [];
};
```

### Why is Hash Map used?

**When to use**:

- Keywords: "frequency", "count", "duplicate", "anagram", "group"
- Need: Fast lookups, counting, or grouping
- Can use extra space for O(1) operations

**Complexity**: O(1) average insert/delete/search, O(n) space
**Problems**: Two Sum, Group Anagrams, Top K Frequent Elements

---

## 🎯 Quick Pattern Identification

| Keywords | Pattern |
|----------|---------|
| subarray, substring, contiguous | Sliding Window |
| sorted array, pair sum | Two Pointers |
| all combinations, permutations | Backtracking |
| tree, graph, connected | DFS/BFS |
| optimal, min/max, count ways | DP or Greedy |
| frequency, count, duplicate | Hash Map |
| cycle, middle element | Fast/Slow Pointers |
| sorted, search, O(log n) | Binary Search |

---

## 💡 Pattern Selection Process

1. **Read keywords** → Match to pattern table above
2. **Check constraints** → Time/space requirements
3. **Identify input type** → Array, tree, graph, etc.
4. **Consider output** → Single value, all solutions, optimal
5. **Apply template** → Adapt to specific problem

**Remember**: Many problems combine multiple patterns (e.g., Sliding Window + Hash Map)
