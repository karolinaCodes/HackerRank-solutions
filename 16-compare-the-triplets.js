function compareTriplets(a, b) {
  const score = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      continue;
    } else if (a[i] > b[i]) {
      score[0]++;
    } else {
      score[1]++;
    }
  }
  return score;
}

const result = compareTriplets([5, 6, 7], [3, 6, 10]);
// [1,1]
const result2 = compareTriplets([17, 28, 30], [99, 16, 8]);
// [2,1]

// console.log(result);
// console.log(result2);
