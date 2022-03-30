// All k frequent elements in array (RECURSION)
let array = [1, 2, 3, 4, 4, 1, 2, 5, 1, 6, 8];

Frequents(0, array, 0);

function Frequents(index, array, count) {
  if (index < array.length) {
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] == array[j]) {
        count++;
        console.log(array[index]);
        break;
      }
    }
    if (count == 3) {
      return;
    }
    return Frequents(index + 1, array, count);
  }
}
