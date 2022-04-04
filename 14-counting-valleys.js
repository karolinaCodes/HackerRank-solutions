function countingValleys(steps, path) {
  let valleys = 0;
  const altitude = [0];

  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'U') {
      const newAltitude = altitude[altitude.length - 1] + 1;
      altitude.push(newAltitude);
    }
    if (path[i] === 'D') {
      const newAltitude = altitude[altitude.length - 1] - 1;
      altitude.push(newAltitude);
      if (newAltitude === 0) {
        continue;
      }
      if (altitude[altitude.length - 2] === 0) {
        valleys++;
      }
    }
  }
  return valleys;
}

// DRIVER CODE
const result = countingValleys(8, 'UDDDUDUU');
const result2 = countingValleys(12, 'DDUUDDUDUUUD');
const result3 = countingValleys(12, 'UDUUUDUDDD');
// 0

// console.log(result);
// console.log(result2);
// console.log(result3);
