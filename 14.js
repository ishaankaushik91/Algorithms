// Insertion in a matrix without order change (RECURSION)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [10, 11, 12, 13],
];

Insertion(
  0,
  matrix,
  Math.floor(Math.random() * (matrix.length - 1)),
  Math.floor(Math.random() * 3),
  101
);

function Insertion(index, matrix, row, column, number) {
  if (index >= row) {
    for (let j = matrix[index].length - 1; j >= column; j--) {
      matrix[index][j + 1] = matrix[index][j];
    }
    return Insertion(index + 1, matrix, row, column, number);
  }
  matrix[row][column] = number;
  console.log(matrix);
}
