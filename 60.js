// All k frequent elements in array (LOOP)
let array = [1, 2, 3, 4, 4, 1, 2, 5, 1, 6, 8];

Frequents(array);

function Frequents(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
        console.log(array[i]);
        break;
      }
    }
    if (count == 3) {
      break;
    }
  }
}
