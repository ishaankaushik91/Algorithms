// n power n (RECURSION)
function superPower(range, number) {
  if (range <= number) {
    return number * superPower(range + 1, number);
  }
  return 1;
}

console.log(superPower(1, 3));
