// Print element with highest frequency in array (LOOP)
let array = [1, 1, 1, 2, 2, 2, 2, 3, 3];
let frequencies = [];

Freqs(array, frequencies);
console.log(Largest(frequencies));

function Freqs(array, reeee) {
  for (let i = 0; i < array.length; i++) {
    let fre = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        fre++;
      }
    }
    reeee.push(fre);
  }
}

function Largest(freeeess) {
  for (let i = 0; i < freeeess.length; i++) {
    if (freeeess[0] < freeeess[i]) {
      freeeess[0] = freeeess[i];
    }
  }
  return freeeess[0];
}
