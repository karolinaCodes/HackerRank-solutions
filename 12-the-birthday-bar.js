function birthday(s, d, m) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    const sCopy = [...s];
    let sliced = sCopy.splice(i, m);
    if (sliced.length !== m) {
      continue;
    }
    if (sliced.reduce((acc, curr) => acc + curr, 0) === d) {
      counter++;
    }
  }
  return counter;
}

// DRIVER CODE
// const result = birthday([2, 2, 1, 3, 2], 4, 2);
// const result2 = birthday([1, 2, 1, 3, 2], 3, 2);
// const result3 = birthday([1, 1, 1, 1, 1, 1], 3, 2);
