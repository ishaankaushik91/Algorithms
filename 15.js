// Insertion in matrix with change in order (LOOP)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

let temp = [Math.floor(Math.random() * 1000001)];
Insertion(matrix, Math.floor(Math.random() * (matrix.length - 1)), temp);
console.log(matrix);

function Insertion(matrix, row, temp) {
  for (let i = matrix.length; i >= row; i--) {
    matrix[i + 1] = matrix[i];
  }
  matrix[row] = temp;
}
