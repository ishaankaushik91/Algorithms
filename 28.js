// Adding 1st row of matrix one with last row of matrix one (LOOP)
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

let start = matrix1.length - 1;

for (let i = 0; i < matrix1.length; i++) {
  let sum = 0;
  for (let j = 0; j < matrix1[i].length; j++) {
    sum += matrix1[i][j] + matrix2[start][j];
  }
  console.log(sum);
  start--;
}
