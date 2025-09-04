const problems = [
  {
    id: 1,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    description:
      "Given an array of numbers and a target, return indices of two numbers that add up to the target.",
    tags: ["array", "Two Pointer"],
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, output: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, output: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, output: [0, 1] },
    ],
    functionName: "twoSum",
    starterCode: {
      javascript: "var twoSum = function(nums, target) {\n // TODO\n};",
      python:
        "class Solution:\n def twoSum(self, nums, target):\n # TODO\n pass",
    },
  },
  {
    id: 2,
    title: "Reverse String",
    description: "Given a string, reverse it and return the reversed string.",
    tags: ["string"],
    slug: "reverse-string",
    difficulty: "Easy",
    testCases: [
      { input: { s: "hello" }, output: "olleh" },
      { input: { s: "world" }, output: "dlrow" },
      { input: { s: "abc" }, output: "cba" },
    ],
    functionName: "reverseString",
    starterCode: {
      javascript: "var reverseString = function(s) {\n // TODO\n};",
      python: "class Solution:\n def reverseString(self, s):\n # TODO\n pass",
    },
  },
  {
    id: 3,
    title: "FizzBuzz",
    description:
      "Given a number n, return an array of strings representing numbers from 1 to n. For multiples of three use 'Fizz', for multiples of five use 'Buzz', and for multiples of both use 'FizzBuzz'.",
    tags: ["array", "math"],
    slug: "fizzbuzz",
    difficulty: "Easy",
    testCases: [
      { input: { n: 3 }, output: ["1", "2", "Fizz"] },
      { input: { n: 5 }, output: ["1", "2", "Fizz", "4", "Buzz"] },
      {
        input: { n: 15 },
        output: [
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
        ],
      },
    ],
    functionName: "fizzBuzz",
    starterCode: {
      javascript: "var fizzBuzz = function(n) {\n // TODO\n};",
      python: "class Solution:\n def fizzBuzz(self, n):\n # TODO\n pass",
    },
  },
  {
    id: 4,
    title: "Maximum Subarray",
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    tags: ["array", "dynamic programming"],
    slug: "maximum-subarray",
    difficulty: "Medium",
    testCases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, output: 6 },
      { input: { nums: [1] }, output: 1 },
      { input: { nums: [5, 4, -1, 7, 8] }, output: 23 },
    ],
    functionName: "maxSubArray",
    starterCode: {
      javascript: "var maxSubArray = function(nums) {\n // TODO\n};",
      python: "class Solution:\n def maxSubArray(self, nums):\n # TODO\n pass",
    },
  },
  // ---------------- Added from here -----------------
  {
    id: 5,
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    description:
      "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    tags: ["string", "two-pointer"],
    difficulty: "Easy",
    testCases: [
      { input: { s: "A man, a plan, a canal: Panama" }, output: true },
      { input: { s: "race a car" }, output: false },
      { input: { s: " " }, output: true },
    ],
    functionName: "isPalindrome",
    starterCode: {
      javascript: "var isPalindrome = function(s) {\n // TODO\n};",
      python: "class Solution:\n def isPalindrome(self, s):\n # TODO\n pass",
    },
  },
  {
    id: 6,
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. Return how many distinct ways you can climb to the top.",
    tags: ["dynamic programming", "math"],
    difficulty: "Easy",
    testCases: [
      { input: { n: 2 }, output: 2 },
      { input: { n: 3 }, output: 3 },
      { input: { n: 5 }, output: 8 },
    ],
    functionName: "climbStairs",
    starterCode: {
      javascript: "var climbStairs = function(n) {\n // TODO\n};",
      python: "class Solution:\n def climbStairs(self, n):\n # TODO\n pass",
    },
  },
  {
    id: 7,
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    description:
      "Merge two sorted linked lists and return it as a sorted list.",
    tags: ["linked-list"],
    difficulty: "Easy",
    testCases: [
      { input: { l1: [1, 2, 4], l2: [1, 3, 4] }, output: [1, 1, 2, 3, 4, 4] },
      { input: { l1: [], l2: [] }, output: [] },
      { input: { l1: [], l2: [0] }, output: [0] },
    ],
    functionName: "mergeTwoLists",
    starterCode: {
      javascript: "var mergeTwoLists = function(l1, l2) {\n // TODO\n};",
      python:
        "class Solution:\n def mergeTwoLists(self, l1, l2):\n # TODO\n pass",
    },
  },
  {
    id: 8,
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-and-sell-stock",
    description:
      "You are given an array prices where prices[i] is the price of a given stock on the i-th day. Return the maximum profit you can achieve.",
    tags: ["array", "greedy"],
    difficulty: "Easy",
    testCases: [
      { input: { prices: [7, 1, 5, 3, 6, 4] }, output: 5 },
      { input: { prices: [7, 6, 4, 3, 1] }, output: 0 },
    ],
    functionName: "maxProfit",
    starterCode: {
      javascript: "var maxProfit = function(prices) {\n // TODO\n};",
      python: "class Solution:\n def maxProfit(self, prices):\n # TODO\n pass",
    },
  },
  {
    id: 9,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    tags: ["stack", "string"],
    difficulty: "Easy",
    testCases: [
      { input: { s: "()" }, output: true },
      { input: { s: "()[]{}" }, output: true },
      { input: { s: "(]" }, output: false },
    ],
    functionName: "isValid",
    starterCode: {
      javascript: "var isValid = function(s) {\n // TODO\n};",
      python: "class Solution:\n def isValid(self, s):\n # TODO\n pass",
    },
  },
  {
    id: 10,
    title: "Search Insert Position",
    slug: "search-insert-position",
    description:
      "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if inserted in order.",
    tags: ["binary search"],
    difficulty: "Easy",
    testCases: [
      { input: { nums: [1, 3, 5, 6], target: 5 }, output: 2 },
      { input: { nums: [1, 3, 5, 6], target: 2 }, output: 1 },
      { input: { nums: [1, 3, 5, 6], target: 7 }, output: 4 },
    ],
    functionName: "searchInsert",
    starterCode: {
      javascript: "var searchInsert = function(nums, target) {\n // TODO\n};",
      python:
        "class Solution:\n def searchInsert(self, nums, target):\n # TODO\n pass",
    },
  },
  // ... I’ll continue ids 11 → 25 in the same style
];

module.exports = problems;
