function pageCount(n, p) {
  const start = Math.floor(p / 2);
  let end;
  if (n % 2 === 0) {
    end = Math.ceil((n - p) / 2);
  } else {
    end = Math.floor((n - p) / 2);
  }
  return start < end ? start : end;
}

const result = pageCount(5, 3);
const result2 = pageCount(6, 2);
const result3 = pageCount(5, 4);
const result4 = pageCount(6, 5);
const result5 = pageCount(6, 4);

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
