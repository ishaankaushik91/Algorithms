// Traversal on a Matrix of 4x4 Dimensions (RECURSION)
let Matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

Traversal(0, Matrix);

function Sub(index, array) {
  if (index < array.length) {
    console.log(array[index]);
    return Sub(index + 1, array);
  }
}

function Traversal(index, Matrix) {
  if (index < Matrix.length) {
    Sub(0, Matrix[index]);
    return Traversal(index + 1, Matrix);
  }
}
