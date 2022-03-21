// Insertion in matrix with change in order (RECURSION)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

Insertion(
  0,
  matrix,
  [Math.floor(Math.random() * 10001)],
  Math.floor(Math.random() * (matrix.length - 1))
);
console.log(matrix);

function Insertion(index, matrix, temp, row) {
  if (index >= row) {
    matrix[index + 1] = matrix[index];
    return Insertion(index - 1, matrix, temp, row);
  }
  matrix[row] = temp;
}
