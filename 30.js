// Finding largest duplicate in array (LOOP)
let array = [1, 2, 3, 44, 10, 100, 90, 44, 60, 21, 2, 3, 5, 6, 5];

duplicate(array, []);

function largest(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[0] < array[i]) {
      array[0] = array[i];
    }
  }
  console.log(array[0]);
}

function duplicate(array, second) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        second.push(array[i]);
        break;
      }
    }
  }

  largest(second);
}
