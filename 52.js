// Summation of every 2nd duplicate element in a matrix (LOOP)
let matrix = [
  [1, 2, 3, 4, 2, 5, 10, 3],
  [10, 23, 23, 21, 10],
  [25, 25, 70, 100],
];

Summation(matrix);

function Summation(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let count = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = j + 1; k < matrix[i].length; k++) {
        if (matrix[i][j] == matrix[i][k]) {
          count++;
          break;
        }
      }
      if (count == 2) {
        console.log(matrix[i][j] + matrix[i][j]);
        break;
      }
    }
  }
}
