/* 
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. Their absolute difference is |15-17|=2.
*/

function diagonalDifference(arr) {
  const leftToRightCoords = [0, 0];
  // get the last element in the first row
  const rightToLeftCoords = [0, arr[0].length - 1];

  let leftToRightTotal = 0;
  let rightToLeftTotal = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === leftToRightCoords[0] && j === leftToRightCoords[1]) {
        leftToRightTotal += arr[i][j];
        leftToRightCoords[0] += 1;
        leftToRightCoords[1] += 1;
      }

      if (i === rightToLeftCoords[0] && j === rightToLeftCoords[1]) {
        rightToLeftTotal += arr[i][j];
        rightToLeftCoords[0] += 1;
        rightToLeftCoords[1] -= 1;
      }
    }
  }
  return Math.abs(leftToRightTotal - rightToLeftTotal);
}

const arr = [
  [-10, 3, 0, 5, -4],
  [2, -1, 0, 2, -8],
  [9, -2, -5, 6, 0],
  [9, -7, 4, 8, -2],
  [3, 7, 8, -5, 0],
];

console.log(diagonalDifference(arr));
