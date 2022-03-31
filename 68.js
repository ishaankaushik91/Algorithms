// Checking wether a number is power of some number (RECURSION)
function Power(start, number, exponent) {
  if (start <= exponent) {
    return number * Power(start + 1, number, exponent);
  }
  return 1;
}

function Check(start, number) {
  if (start <= number) {
    for (let expos = 1; expos <= number; expos++) {
      if (Power(1, start, expos) == number) {
        console.log(start, "power", expos);
      }
    }
    return Check(start + 1, number);
  }
}

Check(1, 125);
