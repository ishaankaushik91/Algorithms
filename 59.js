// All pre prime of each elements in array (RECURSION)
let array = [24, 100, 50, 25, 18, 19];

PrePrimes(0, array);

function PrePrimes(index, array) {
  if (index < array.length) {
    if (PrimeCheck(2, array[index]) == 0) {
      array[index] -= 1;
      return PrePrimes(index, array);
    }
    console.log(array[index]);
    return PrePrimes(index + 1, array);
  }
}

function PrimeCheck(start, number) {
  if (start < number) {
    if (number % start == 0) {
      return 0;
    }
    return PrimeCheck(start + 1, number);
  }
  return 1;
}
