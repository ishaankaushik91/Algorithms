// Summation of every 2nd duplicate element in a matrix (RECURSION)
let matrix = [
  [1, 2, 3, 4, 2, 5, 10, 3],
  [10, 23, 23, 21, 10],
  [25, 25, 70, 100],
];

Summation(0, matrix);

function Summation(index, matrix) {
  if (index < matrix.length) {
    let count = 0;
    for (let j = 0; j < matrix[index].length; j++) {
      for (let k = j + 1; k < matrix[index].length; k++) {
        if (matrix[index][j] == matrix[index][k]) {
          count++;
          break;
        }
      }
      if (count == 2) {
        console.log(matrix[index][j] + matrix[index][j]);
        break;
      }
    }
    return Summation(index + 1, matrix);
  }
}
