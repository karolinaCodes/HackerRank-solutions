function getMoneySpent(keyboards, drives, b) {
  const max = -1;
  for (let i = 0; i < keyboards.length; i++) {
    let temp = 0;
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        temp = keyboards[i] + drives[j];
        max = temp > max ? temp : max;
      }
    }
  }
  return max;
}

const b = 60;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

// const result = getMoneySpent(keyboards, drives, b);
// const result2 = getMoneySpent([3, 1], [5, 2, 8], 10);
// 9
const result3 = getMoneySpent([4], [5], 5);

// console.log(result);
// console.log(result2);
console.log(result3);
