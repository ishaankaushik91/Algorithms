// Making frequency of all primes a prime in array (LOOP + Declarative)
// NOT WORKING
let array = [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4];

array.forEach((ele) => {
  let freq = 0;
  array.forEach((nums) => {
    if (ele == nums) freq++;
  });
  while (PrimeCheck(freq) == 0 && PrimeCheck(ele)) {
    freq += 1;
  }
  console.log(freq);
});

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}
