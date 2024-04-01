# Code Kata

This repository holds Kata that i have collected and completed on the Leetcode training platform. It has been useful to work on these kata locally as it allows me to group them and write test cases / store notes.

If you  have been granted access to my template repo, you will find the kata template I am replicating for each test [here](https://github.com/JRRS1982/Templates/tree/main/node-ts-jest-kata)

The list includes a lot of the [teamblind.com](https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU) kata, and i hope to work my way through it.

## Array

Algorithms that are associated with manipulating Arrays. Reduce, Map, Filter are your friends here.

- [x] [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- [x] [Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros/)
- [x] [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [x] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [x] [Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/)
- [x] [Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [x] [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
- [x] [Two Sum](https://leetcode.com/problems/two-sum/)
- [x] [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- [x] [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)

---

### Backtracking

"Every you have a problem that is solved by a series of decisions you may have to backtrack to another point and choose something else"

It incrementally builds all candidates for the solution and abandon's / backtracks when the solution is not valid. It is a general graph search.

<https://leetcode.com/problems/permutations/solutions/18239/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partioning)/>

- [x] [Subsets](https://leetcode.com/problems/subsets/description/)
- [ ] [Combination Sum](<https://leetcode.com/problems/combination-sum/>)
- [ ] Permutations
- [ ] Subsets 2
- [ ] Combination Sum 2
- [ ] Palindrome Partitioning
- [ ] Letter Combination of a Phone Number
- [ ] N Queens

---

## Binary Search

Binary search is a fast search algorithm that finds the position of a target value within a sorted array by repeatedly dividing the search parameter in half.

<https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems>

- [x] [Binary Search](https://leetcode.com/problems/binary-search/description/)
- [ ] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [ ] Koko Eating Bananas
- [ ] Median of Two Sorted Arrays
- [ ] Search a 2D Matrix
- [x] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [ ] Time Based Key Value Store

---

## Bit Manipulation

<https://leetcode.com/problems/sum-of-two-integers/solutions/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/>

- [ ] Single Number
- [ ] Number of 1 Bits
- [ ] Counting Bits
- [ ] Reverse Bits
- [ ] Missing Number
- [ ] Sum of To Integers
- [ ] Reverse Integer

---

## Dynamic Programming

<https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns>

- [ ] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [ ] [Combination Sum 4](https://leetcode.com/problems/combination-sum-iv/)
- [ ] [Coin Change](https://leetcode.com/problems/coin-change/)
- [ ] [Decode Ways](https://leetcode.com/problems/decode-ways/)
- [ ] [House Robber](https://leetcode.com/problems/house-robber/)
- [ ] [House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [ ] [Jump Game](https://leetcode.com/problems/jump-game/)
- [ ] Min Cost Climbing Stairs

### 1D Dynamic Programming

- [ ] [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
- [ ] [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- [ ] [Maximum Product Sub Array](https://leetcode.com/problems/maximum-product-subarray/)
- [ ] [Word Break](https://leetcode.com/problems/word-break/)
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [ ] Partition Equal Subset Sum

### 2D Dynamic Programming

- [ ] [Unique Paths](https://leetcode.com/problems/unique-paths/)
- [ ] [Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
- [ ] [Best Time To Buy And Sell Stock With A Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown)
- [ ] [Coin Change 2](https://leetcode.com/problems/coin-change-ii)
- [ ] Target Sum
- [ ] Interleaving String
- [ ] Longest Increasing Path In A Matrix
- [ ] Distinct Subsequence
- [ ] Edit Distance
- [ ] Burst Balloons
- [ ] Regular Expression Matching

### Recursion

Recursion is the backbone of dynamic programming and backtracking.

<https://leetcode.com/discuss/study-guide/1733447/become-master-in-recursion>

---

## Graph

<https://leetcode.com/discuss/study-guide/655708/Graph-For-Beginners-Problems-or-Pattern-or-Sample-Solutions>

- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [ ] [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [ ] [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [ ] [Graph Valid Tree Leetcode Premium](https://leetcode.com/problems/graph-valid-tree/)
- [ ] [Number of Connected Components in an Undirected Graph Leetcode Premium](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- [ ] Max Area of Island
- [ ] Surrounded Regions
- [ ] Rotting Oranges
- [ ] Walls and Gates
- [ ] Course Schedule 2
- [ ] Redundant Connection
- [ ] Word Ladder

---

### Advanced Graph

- [ ] Reconstruct Itinerary
- [ ] Min Cost To Connect All Points
- [ ] Network Delay Time
- [ ] Swim In Rising Water
- [ ] Alien Dictionary
- [ ] Cheapest Flights Within K Stops

---

## Greedy

A greedy algorithm: requires you to internally solve problems (optimally) to solve the higher scope problem. Examples being Dijkstra's algo, where you find the shortest path in a graph and Prim's or Krustal's algo where you find the minimum spanning trees in a graph.

- [x] [Maximum Sub Array](https://leetcode.com/problems/maximum-subarray/)
- [ ] Jump Game 2
- [ ] Gas Station
- [ ] Hand Of Straights
- [ ] Merge Triplets To Form Target Triplet
- [ ] Partition Labels
- [ ] Valid Parenthesis String

---

## Heap

An advanced tree based data structure used primarily for sorting and implementing priority queues

- [ ] [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [ ] [Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)

---

## Interval

- [ ] [Insert Interval](https://leetcode.com/problems/insert-interval/)
- [ ] [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
- [ ] [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [ ] [Meeting Rooms Leetcode Premium](https://leetcode.com/problems/meeting-rooms/)
- [ ] [Meeting Rooms II Leetcode Premium](https://leetcode.com/problems/meeting-rooms-ii/)
- [ ] Minimum Interval To Include Each Query

---

## Linked List

- [ ] [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
- [ ] [Detect Cycle in a Linked List](https://leetcode.com/problems/linked-list-cycle/)
- [ ] [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- [ ] [Merge K Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- [ ] [Remove Nth Node From End Of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
- [ ] [Reorder List](https://leetcode.com/problems/reorder-list/)
- [ ] Copy List With Random Pointer
- [ ] Add Two Numbers
- [ ] Linked List Cycle
- [ ] Find The Duplicate Number
- [ ] LRU Cache

---

## Math and Geometry

- [x] Fizzbuzz
- [x] [Rotate Image](https://leetcode.com/problems/rotate-image/)
- [ ] [Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
- [ ] [Set Matrix Zeroes](https://leetcode.com/problems/set-matrix-zeroes/)
- [ ] Happy Number
- [ ] Plus One
- [ ] Pow(x,n)
- [ ] Multiply Strings
- [ ] Detect Squares

---

## Sliding Window

Think of it like a window sliding across and array of elements, where the window is analysed against a given constraint, i.e. a sub array of elements within a larger array and you update a variable outside the loop.

There are two types of this, one where the window reduces in size and one where it doesn`t

<https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/>

- [x] [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- [x] Check N and It's Double Exist
- [x] Maximum SubArray
- [ ] [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [ ] [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)
- [ ] [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- [ ] Permutation In String
- [ ] Sliding Window Maximum

---

## Stack

- [x] [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [x] [Min Stack](https://leetcode.com/problems/min-stack/description/)
- [] Evaluate Reverse Polish Notation
- [] Generate Parentheses
- [] Daily Temperatures
- [] Car Fleet
- [] Largest Rectangle In Histogram

---

## Two Pointers

- [x] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- [x] [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)
- [x] [Two Sum II Input Array Is Sorted](<https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/>)
- [x] [3Sum](https://leetcode.com/problems/3sum/description/)
- [x] [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [ ] [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
- [x] [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/)

---

## Tree

<https://leetcode.com/discuss/study-guide/1337373/tree-question-pattern-2021-placement>

- [ ] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [ ] [Same Tree](https://leetcode.com/problems/same-tree/)
- [ ] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- [ ] [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- [ ] [Construct Binary Tree from pre order and in order traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [ ] [Lowest Common Ancestor of BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [ ] [Add and Search Word](https://leetcode.com/problems/add-and-search-word-data-structure-design/)
- [ ] Diameter of Binary Tree
- [ ] Balanced Binary Tree
- [ ] Binary Tree Right Side View
- [ ] Count Good Nodes In Binary Tree

---

### Tries

- [ ] [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [ ] [Word Search](https://leetcode.com/problems/word-search/)
- [ ] [Word Search II](https://leetcode.com/problems/word-search-ii/)
- [ ] Design And Add Search Words Data

---

## Queue

A linear structure with the first in, first out order. Imagine lining up for a ride, those at the front get on first.

- [ ] Kth Largest Element In A Stream
- [ ] Last Stone Weight
- [ ] K Closest Points to Origin
- [ ] Kth Largest Element In An Array
- [ ] Task Scheduler
- [ ] Design Twitter
- [ ] Find Median From Data Stream

---

## PEDAC

This is a model for solving coding problems

Process > Example > Data > Algo > Code

### Process (understand) the problem

- Read the description
- Identify inputs / outputs
- Identify rules / requirements
- Ask clarifying questions
- Examine all examples

### Example test cases

- Understand how the input translates to the output
- Identify edge cases: i.e. do we need to handle an empty input?
- Create test cases and confirm outputs

### Data Structures

- What kind of data is being dealt with? Strings? Arrays? Objects? Big Numbers etc

### Algorithm

- Step by step a process that take you from input to output
- Handle edge cases and valid example inputs
- Code will depend on the algorithm

### Code

- Use everything you've gathered so far to write the code
- If there are errors in the output, adjust your algorithm before looking at the code
