// Summation of all 2 digit numbers in array (LOOP)
let array = [1, 2, 3, 4, 12, 10, 2, 55, 9, 8];

console.log(Summation(array));

function Summation(array)
{
    let sum = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i].toString().length == 2)
        {
            sum += array[i];
        }
    }
    return sum;
}