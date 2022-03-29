// Finding largest duplicate in matrix (LOOP)
let matrix = [
  [2, 1, 2, 2, 44, 54, 44, 88, 54],
  [10, 20, 10, 33, 44, 100],
  [90, 80, 60, 19],
];

duplicate(matrix);

function largest(array) {
  for (let m = 0; m < array.length; m++) {
    if (array[0] < array[m]) {
      array[0] = array[m];
    }
  }
  console.log(array[0]);
}

function duplicate(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let duplis = [];
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = j + 1; k < matrix[i].length; k++) {
        if (matrix[i][j] == matrix[i][k]) {
          duplis.push(matrix[i][j]);
          break;
        }
      }
    }
    largest(duplis);
  }
}
