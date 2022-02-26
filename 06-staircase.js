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
  let hashStart = n - 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j >= hashStart) {
        staircaseString += '#';
      } else {
        staircaseString += ' ';
      }
    }
    staircaseString += '\n';
    hashStart--;
  }
  console.log(staircaseString);
}

// DRIVER CODE
staircase(6);
