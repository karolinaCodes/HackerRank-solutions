/* 
This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function staircase(n) {
  let staircaseString = '';
  let hashStart = n - 1; // O(1)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= hashStart) {
        staircaseString += '#'; // O(1)
      } else {
        staircaseString += ' '; // O(1)
      }
    }
    staircaseString += '\n'; // O(1)
    hashStart--; // O(1)
  }

  // O(n^2)
  console.log(staircaseString); // O(1)

  // O(6) + O(n^2) = O(n^2)
}

// DRIVER CODE
staircase(6);
