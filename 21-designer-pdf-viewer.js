function designerPdfViewer(h, word) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  const letterHeights = [];
  for (let i = 0; i < word.length; i++) {
    const index = alphabet.indexOf(word[i]);
    letterHeights.push(h[index]);
  }
  return word.length * Math.max(...letterHeights);
}

// const h = [
//   1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
// ];
// const result = designerPdfViewer(h, 'abc');

// console.log(result);
