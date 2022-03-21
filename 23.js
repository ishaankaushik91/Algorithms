// Minimum difference in elements of array (LOOP)
let array = [1, 2, 3, 4, 5, 10, 11, 13, 15];
let diff = 100;

for (let i = array.length - 1; i >= 0; i--) {
  if (array[i] - array[i - 1] < diff) {
    diff = array[i] - array[i - 1];
  }
}
console.log(diff);
