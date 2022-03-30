// n power forced prime (RECURSION)
function Power(range, number, expo) {
  if (range <= expo) {
    if (PrimeCheck(2, expo) == 0) {
      return Power(range, number, expo + 1);
    }
    return number * Power(range + 1, number, expo);
  }
  return 1;
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

console.log(Power(1, 2, 10));
