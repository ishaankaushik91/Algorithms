// Element with highest frequency in a matrix (RECURSION)
let matrix = [
  [1, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3],
  [10, 11, 11, 10, 12, 10, 10, 10, 11, 11],
  [13, 10, 12, 12, 12, 15, 15, 15, 15, 15],
];

let res = [];
Frequency(0, matrix, res);

function Largest(index, matrix) {
  if (index < matrix.length) {
    for (let j = 0; j < matrix[index].length; j++) {
      if (matrix[index][0] < matrix[index][j]) {
        matrix[index][0] = matrix[index][j];
      }
    }
    console.log(matrix[index][0]);
    return Largest(index + 1, matrix);
  }
}

function Frequency(index, matrix, res) {
  if (index < matrix.length) {
    let temp = [];
    for (let j = 0; j < matrix[index].length; j++) {
      let freq = 0;
      for (let k = 0; k < matrix[index].length; k++) {
        if (matrix[index][j] == matrix[index][k]) {
          freq++;
        }
      }
      temp.push(freq);
    }
    res.push(temp);
    return Frequency(index + 1, matrix, res);
  }

  Largest(0, res);
}
