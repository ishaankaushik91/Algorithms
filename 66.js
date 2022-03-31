// Matrix traversal purely recursive
let Matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

Traversal(0, Matrix, 0);

function Traversal(index, Matrix, j) {
  if (index < Matrix.length) {
    if (j < Matrix[index].length) {
      console.log(Matrix[index][j]);
      return Traversal(index, Matrix, j + 1);
    }
    j = 0;
    return Traversal(index + 1, Matrix, j);
  }
}
