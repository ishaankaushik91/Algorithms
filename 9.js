// Element eith highest frequency in a matrix (LOOP)
let matrix = [
  [1, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3],
  [10, 11, 11, 10, 12, 10, 10, 10, 11, 11],
  [13, 10, 12, 12, 12, 15, 15, 15, 15, 15],
];

let res = [];
Frequency(matrix, res);

function Frequency(matrix, res) {
  for (let i = 0; i < matrix.length; i++) {
    let temp = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let freq = 0;
      for (let k = 0; k < matrix[i].length; k++) {
        if (matrix[i][j] == matrix[i][k]) {
          freq++;
        }
      }
      temp.push(freq);
    }
    res.push(temp);
  }

  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      if (res[i][0] < res[i][j]) {
        res[i][0] = res[i][j];
      }
    }
    console.log(res[i][0]);
  }
}
