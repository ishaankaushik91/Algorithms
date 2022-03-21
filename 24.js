// Minimum difference in elements of array (RECURSION)
let array = [1, 2, 3, 4, 5, 10, 11, 13, 15];

Minimum(array.length - 1, array, 15);

function Minimum(index, array, diff) {
  if (index >= 0) {
    if (array[index] - array[index - 1] < diff) {
      diff = array[index] - array[index - 1];
      return Minimum(index + 1, array, diff);
    }
    return Minimum(index - 1, array, diff);
  }
  console.log(diff);
}
