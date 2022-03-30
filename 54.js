// n power n (LOOP)
function superPower(number) {
  let pi = 1;
  for (let i = 1; i <= number; i++) {
    pi *= number;
  }
  return pi;
}

console.log(superPower(3));
