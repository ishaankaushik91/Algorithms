// Summation of all 2 digit numbers in a Matrix (RECURSION)
let Matrix = [
    [1, 2, 3, 12, 12, 3, 31],
    [10, 91, 2, 3, 4],
    [2, 2, 1, 12]
];

Summation(0, Matrix);

function Summation(index, Matrix)
{
    if (index < Matrix.length)
    {
        let sum = 0;
        for (let i = 0; i < Matrix[index].length; i++)
        {
            if (Matrix[index][i].toString().length == 2)
            {
                sum += Matrix[index][i];
            }
        }
        console.log(sum);
        return Summation(index + 1, Matrix);
    }
    return 0;
}