function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  arr.forEach(el => {
    if (el > 0) positive++;
    if (el < 0) negative++;
    if (el === 0) zero++;
  });

  console.log(`${positive / arr.length.toFixed(1)}`.padEnd(6, '0'));
  console.log(`${negative / arr.length.toFixed(1)}`.padEnd(6, '0'));
  console.log(`${zero / arr.length.toFixed(1)}`.padEnd(6, '0'));
}
