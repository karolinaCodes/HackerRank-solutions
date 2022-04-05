function catAndMouse(x, y, z) {
  const aDiff = Math.abs(x - z);
  const bDiff = Math.abs(y - z);
  if (aDiff === bDiff) {
    return 'Mouse C';
  } else if (aDiff < bDiff) {
    return 'Cat A';
  } else {
    return 'Cat B';
  }
}

// const result = catAndMouse(2, 5, 4);
// 'Cat B'
// const result2 = catAndMouse(1, 3, 2);
// 'Mouse C'

// console.log(result);
// console.log(result2);
