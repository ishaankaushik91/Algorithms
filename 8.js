// Print element with highest frequency in array (RECURSION)
let array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2];

Frequency(0, array, []);

function Frequency(index, array, result) {
  if (index < array.length) {
    let freqs = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[index] == array[j]) {
        freqs++;
      }
    }
    result.push(freqs);
    return Frequency(index + 1, array, result);
  }
  Largest(0, result);
}

function Largest(index, array) {
  if (index < array.length) {
    if (array[0] < array[index]) {
      array[0] = array[index];
      return Largest(index + 1, array);
    }
    return Largest(index + 1, array);
  }
  console.log(array[0]);
}
