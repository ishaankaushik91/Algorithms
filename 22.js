// Splitting given string (RECURSION)
let nums = "10111234567";

Splitting(0, nums);

function Splitting(index, string) {
  if (index < string.length) {
    console.log(string[index], string[index + 1]);
    return Splitting(index + 2, string);
  }
}
