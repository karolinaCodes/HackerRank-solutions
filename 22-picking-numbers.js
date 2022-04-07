function pickingNumbers(a) {
  const sorted = a.sort((a, b) => a - b);

  const lengths = [];
  let length = 1;
  let first = sorted[0];

  for (let i = 0; i < sorted.length; i++) {
    if (Math.abs(first - sorted[i + 1]) <= 1) {
      length++;
      continue;
    }
    lengths.push(length);
    length = 1;
    first = sorted[i + 1];
  }
  return Math.max(...lengths);
}

const result = pickingNumbers([4, 6, 5, 3, 3, 1]);
//3

console.log(result);
