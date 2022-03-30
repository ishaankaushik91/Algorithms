// All pre prime of each elements in array (LOOP)
let array = [24, 100, 50, 25, 18, 19];

PrePrimes(array);

function PrePrimes(array) {
  for (let j = 0; j < array.length; j++) {
    while (PrimeCheck(array[j]) == 0) {
      array[j] -= 1;
    }
    console.log(array[j]);
  }
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
