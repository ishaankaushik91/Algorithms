// Summation of frequency of elements in array (RECURSION)
let array = [1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 11, 12];

console.log(Summation(0, array));

function Summation(index, array) {
  if (index < array.length) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        freq++;
      }
    }
    return freq + Summation(index + 1, array);
  }
  return 0;
}
