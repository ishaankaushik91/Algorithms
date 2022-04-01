// Storing division of primes in a range in an array
function GenPrime(range, a1) {
  for (let i = 2; i <= range; i++) {
    if (PrimeCheck(i)) {
      a1.push(i);
    }
  }
  console.log(a1);
}

function PrimeCheck(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return 0;
    }
  }
  return 1;
}

let a = [],
  res = [];
GenPrime(1000, a);

for (let k = 0; k < a.length - 1; k++) {
  res.push(a[k] / a[k + 1]);
}
console.log(res);
