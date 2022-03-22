// Adding 1st row of matrix one with last row of matrix one (RECURSION)
let matrix1 = [
  [1, 2, 3, 4],
  [10, 11, 12, 13],
  [5, 6, 7, 8],
];

let matrix2 = [
  [20, 21, 22, 23],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
];

Summation(0, matrix1, matrix2.length - 1, matrix2);

function Summation(index, matrix1, start, matrix2) {
  if (index < matrix1.length) {
    let sum = 0;
    for (let j = 0; j < matrix1[index].length; j++) {
      sum += matrix1[index][j] + matrix2[start][j];
    }
    console.log(sum);
    return Summation(index + 1, matrix1, start - 1, matrix2);
  }
}
