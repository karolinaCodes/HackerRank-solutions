function hurdleRace(k, heights) {
  const highestHurdle = Math.max(...heights);
  return highestHurdle - k < 0 ? 0 : highestHurdle - k;
}

// const result = hurdleRace(1, [1, 2, 3, 3, 2]);

// console.log(result);
