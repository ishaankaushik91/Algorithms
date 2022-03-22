// Reverse of a matrix (RECURSION)
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

Print(matrix.length - 1, matrix);

function Print(index, matrix) {
  if (index >= 0) {
    for (let j = 0; j < matrix[index].length; j++) {
      console.log(matrix[index][j]);
    }
    return Print(index - 1, matrix);
  }
}
