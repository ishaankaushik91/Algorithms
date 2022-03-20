// Largest element in each row of a matrix (LOOP)
let matrix = [
  [1, 10, 29, 10, 32, 33, 9, 8, 7],
  [10, 112, 1, 1, 1, 1, 3, 4, 6, 10],
  [15, 18, 180, 190, 2, 0, 9],
];

Largest(matrix);

function Largest(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][0] < matrix[i][j]) {
        matrix[i][0] = matrix[i][j];
      }
    }
    console.log(matrix[i][0]);
  }
}
