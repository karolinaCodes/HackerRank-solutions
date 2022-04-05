function getMoneySpent(keyboards, drives, b) {
  const filtered = keyboards.filter(keyboard => keyboard !== b);
  const mostExpenKeyboard = Math.max(...filtered);
  let output = -1;
  for (let i = drives.length - 1; i >= 0; i--) {
    if (mostExpenKeyboard + drives[i] < 60) {
      output = mostExpenKeyboard + drives[i];
      break;
    }
  }
  return output;
}

const b = 60;
const keyboards = [40, 50, 60];
const drives = [5, 8, 12];

// const result = getMoneySpent(keyboards, drives, b);
// const result2 = getMoneySpent([3, 1], [5, 2, 8], 10);
// 9

// console.log(result);
// console.log(result2);
