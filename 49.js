// Finding largest duplicate in matrix (RECURSION)
let matrix = [
  [2, 1, 2, 2, 44, 54, 44, 88, 54],
  [10, 20, 10, 33, 44, 100],
  [90, 80, 60, 19],
];

duplicate(0, matrix);

function largest(index, array) {
  if (index < array.length) {
    if (array[0] < array[index]) {
      array[0] = array[index];
      return largest(index + 1, array);
    }
    return largest(index + 1, array);
  }
  console.log(array[0]);
}

function duplicate(index, matrix) {
  if (index < matrix.length) {
    let duplis = [];
    for (let j = 0; j < matrix[index].length; j++) {
      for (let k = j + 1; k < matrix[index].length; k++) {
        if (matrix[index][j] == matrix[index][k]) {
          duplis.push(matrix[index][j]);
        }
      }
    }
    largest(0, duplis);
    return duplicate(index + 1, matrix);
  }
}
