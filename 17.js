// Summation of frequency of elements in array (LOOP)
let array = [1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 11, 12];

console.log(Summation(array));

function Summation(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        freq++;
      }
    }
    sum += freq;
  }
  return sum;
}
