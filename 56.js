// n power forced prime (LOOP)
function Power(number, expo) {
  while (PrimeCheck(expo) == 0) {
    expo += 1;
  }

  let pi = 1;
  for (let i = 1; i <= expo; i++) {
    pi *= number;
  }
  return pi;
}

function PrimeCheck(number) {
  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      return 0;
    }
  }
  return 1;
}

console.log(Power(2, 10));
