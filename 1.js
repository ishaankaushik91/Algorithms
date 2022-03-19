// All primes from a matrix (LOOP + Declarative)
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

matrix.forEach((Element) => {
  Element.forEach((number) => {
    if (PrimeCheck(number)) console.log(number);
  });
});

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
