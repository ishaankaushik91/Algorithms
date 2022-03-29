// Summation of every 2nd duplicate in an array (RECURSION)
let array = [10, 12, 21, 90, 16, 12, 21, 31, 30];

Summation(0, array, 0);

function Summation(index, array, count) {
  if (index < array.length) {
    for (let j = index + 1; j < array.length; j++) {
      if (array[index] == array[j]) {
        count++;
      }
    }
    if (count == 2) {
      console.log(array[index] + array[index]);
      return;
    }
    return Summation(index + 1, array, count);
  }
}
