function sockMerchant(n, ar) {
  let pairs = 0;
  const filtered = ar.filter(sock => {
    return sock === ar[0];
  });
  const count = Math.floor(filtered.length / 2);
  pairs += count;
  console.log(pairs);
}

sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);

// FINISHED?
