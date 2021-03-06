/* 
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

*/

function aVeryBigSum(ar) {
  return ar.reduce((acc, curr) => acc + curr, 0);
  // O(n) + O(1) = O(n)
}
