// Summation of all 2 digit numbers in a Matrix (LOOP)
let Matrix = [
    [1, 2, 3, 12, 12, 3, 31],
    [10, 91, 2, 3, 4],
    [2, 2, 1, 12]
];

Summation(Matrix);

function Summation(Matrix)
{
    for (let i = 0; i < Matrix.length; i++)
    {
        let sum = 0;
        for (let j = 0; j < Matrix[i].length; j++)
        {
            if (Matrix[i][j].toString().length == 2)
            {
                sum += Matrix[i][j];
            }
        }
        console.log(sum);
    }
}