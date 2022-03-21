// Summation of all frequencies of elements in a matrix (LOOP)
let matrix = [
  [1, 1, 1, 1, 2, 2, 2, 3, 3],
  [10, 11, 11, 11, 11],
  [102, 11, 12, 1, 1, 190],
];

Frequency(matrix);

function Frequency(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      let freq = 0;
      for (let k = 0; k < matrix[i].length; k++) {
        freq++;
      }
      sum += freq;
    }
    console.log(sum);
  }
}
