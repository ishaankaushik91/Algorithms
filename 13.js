// Insertion in a matrix without order change (LOOP)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [10, 11, 12, 13],
];

function Insertion(matrix, row, column, number) {
  for (let i = matrix.length - 1; i >= row; i--) {
    for (let j = matrix[i].length - 1; j >= column; j--) {
      matrix[i][j + 1] = matrix[i][j];
    }
  }
  matrix[row][column] = number;
  console.log(matrix);
}
