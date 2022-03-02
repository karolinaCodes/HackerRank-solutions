function getRatio(num, array) {
  return `${(num / array.length).toFixed(6)}`; // O(1)
}

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach(el => {
    if (el > 0) positive++; // O(1)
    if (el < 0) negative++; // O(1)
    if (el === 0) zero++; // O(1)
  });
  // O(n)
  const positiveRatio = getRatio(positive, arr); // O(1)
  const negativeRatio = getRatio(negative, arr); // O(1)
  const zeroRatio = getRatio(zero, arr); // O(1)

  console.log(positiveRatio); // O(1)
  console.log(negativeRatio); // O(1)
  console.log(zeroRatio); // O(1)

  // O(10) + O(n) = O(n)
}

// DRIVER CODE

// const arr = [
//   55, 48, 48, 45, 91, 97, 45, 1, 39, 54, 36, 6, 19, 35, 66, 36, 72, 93, 38, 21,
//   65, 70, 36, 63, 39, 76, 82, 26, 67, 29, 24, 82, 62, 53, 1, 50, 47, 65, 67, 19,
//   66, 90, 77,
// ];
// plusMinus(arr);
