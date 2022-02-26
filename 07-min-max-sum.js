/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
arr=[1,3,5,7,9]
*/

function miniMaxSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const minSumArr = sortedArray.slice(0, 4);
  const maxSumArr = sortedArray.slice(1, 5);

  const minSum = minSumArr.reduce((acc, curr) => acc + curr);
  const maxSum = maxSumArr.reduce((acc, curr) => acc + curr);
  console.log(minSum, maxSum);
}

// DRIVER CODE
arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
