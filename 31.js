// Finding largest duplicate in array (RECURSION)
let array = [1, 2, 3, 44, 10, 100, 90, 44, 60, 21, 2, 3, 5, 6, 5];

duplicate(0, array, []);

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

function duplicate(index, array, dupli) {
  if (index < array.length) {
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] == array[j]) {
        dupli.push(array[index]);
      }
    }
    return duplicate(index + 1, array, dupli);
  }
  largest(0, dupli);
}
