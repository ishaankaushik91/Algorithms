// Largest element in each row of a matrix (RECURSION)
let matrix = [
  [1, 10, 29, 10, 32, 33, 9, 8, 7],
  [10, 112, 1, 1, 1, 1, 3, 4, 6, 10],
  [15, 18, 180, 190, 2, 0, 9],
];

Largest(0, matrix);

function Largest(index, matrix) {
  if (index < matrix.length) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][0] < matrix[index][j]) {
        matrix[index][0] = matrix[index][j];
      }
    }
    console.log(matrix[index][0]);
    return Largest(index + 1, matrix);
  }
}
