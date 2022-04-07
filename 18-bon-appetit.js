function bonAppetit(bill, k, b) {
  const total = bill.reduce((acc, curr, index) => {
    if (index === k) {
      return acc;
    }
    return acc + curr;
  }, 0);

  const annasTotal = total / 2;
  if (annasTotal === b) {
    return console.log('Bon Appetit');
  }
  console.log(b - annasTotal);
}

// DRIVER CODE
// const result = bonAppetit([3, 10, 2, 9], 1, 12);
// const result2 = bonAppetit([3, 10, 2, 9], 1, 7);

// console.log(result);
// console.log(result2);
