/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles=[4,4,1,3]

The maximum height candles are 4 units high. There are 2 of them, so return 2.*/

function birthdayCakeCandles(candles) {
  let largest = candles[0];
  let count = 0;
  candles.forEach(candle => {
    if (candle > largest) {
      largest = candle;
      count = 0;
    }
    if (candle === largest) count++;
  });
  return count;
}

// DRIVER CODE
candles = [4, 4, 1, 3];
candles2 = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candles));
console.log(birthdayCakeCandles(candles2));
