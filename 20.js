// Summation of all frequencies of elements in a matrix (RECURSION)
let matrix = [
  [1, 1, 1, 1, 2, 2, 2, 3, 3],
  [10, 11, 11, 11, 11],
  [102, 11, 12, 1, 1, 190],
];

Frequency(0, matrix);

function Frequency(index, matrix) {
  if (index < matrix.length) {
    let sum = 0;
    for (let j = 0; j < matrix[index].length; j++) {
      let freq = 0;
      for (let k = 0; k < matrix[index].length; k++) {
        if (matrix[index][j] == matrix[index][k]) {
          freq++;
        }
      }
      sum += freq;
    }
    console.log(sum);
    return Frequency(index + 1, matrix);
  }
}
