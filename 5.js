// Keep inserting same number until frequency is equal to number in array (RECURSION)
let array = [10, 10];

Traversal(0, array);
console.log(array);

function Insertion(index, array, position) {
  if (index >= position) {
    array[index + 1] = array[index];
    return Insertion(index - 1, array, position);
  }
}

function Traversal(index, array) {
  if (index < array.length) {
    let freq = 0;
    for (let k = 0; k < array.length; k++) {
      if (array[index] == array[k]) {
        freq++;
      }
    }
    let temp = freq;
    while (temp != array[index]) {
      let randomIndex = Math.floor(Math.random() * (array.length - 1));
      Insertion(array.length - 1, array, randomIndex);
      array[randomIndex] = array[index];
      temp += 1;
    }
    return Traversal(index + 1, array);
  }
}
