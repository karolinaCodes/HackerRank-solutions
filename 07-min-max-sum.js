/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr=[1,3,5,7,9]
*/

function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b); // O(n)
  const minSumArr = sortedArray.slice(0, 4); // O(n)
  const maxSumArr = sortedArray.slice(1, 5); // O(n)

  const minSum = minSumArr.reduce((acc, curr) => acc + curr); // O(n)
  const maxSum = maxSumArr.reduce((acc, curr) => acc + curr); // O(n)
  console.log(minSum, maxSum); // O(1)

  // O(5n) + O(1)= O(5n+1) = O(n)
}

// DRIVER CODE
arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
