// Checking wether a number is power of some number (LOOP)
function Power(number, exponent) {
  let pi = 1;
  for (let j = 1; j <= exponent; j++) {
    pi *= number;
  }
  return pi;
}

function Check(number) {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (Power(i, j) == number) {
        console.log(i, "power", j);
      }
    }
  }
}

Check(125);
