// Summation of every 2nd duplicate in an array (LOOP)
let array = [10, 12, 21, 90, 16, 12, 21, 31, 30];

Summation(array);

function Summation(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        count++;
      }
    }
    if (count == 2) {
      console.log(array[i] + array[i]);
      break;
    }
  }
}
