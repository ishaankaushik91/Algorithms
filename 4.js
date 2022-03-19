// Keep inserting same number until frequency is equal to number in array (LOOP)
let array = [10, 10];

Frequency(array);
console.log(array);

function Frequency(array) {
  for (let i = 0; i < array.length; i++) {
    let freq = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        freq++;
      }
    }

    let temp = freq;

    while (temp != array[i]) {
      let randomIndex = Math.floor(Math.random() * (array.length - 1));
      for (let k = array.length - 1; k >= randomIndex; k--) {
        array[k + 1] = array[k];
      }
      array[randomIndex] = array[i];
      temp += 1;
    }
  }
}
