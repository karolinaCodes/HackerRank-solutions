function sockMerchant(n, ar) {
  let pairs = 0;
  while (ar.length > 0) {
    const first = ar[0];
    const allFirsts = ar.filter(el => el === first);
    pairs += Math.floor(allFirsts.length / 2);
    const filteredOriginal = ar.filter(el => el !== first);
    ar = filteredOriginal;
  }
  return pairs;
}

// DRIVER CODE
// sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
