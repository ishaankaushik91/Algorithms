// Printing power triangle (RECURSION)

Check(1, 10);

function Check(start, number)
{
    if (start <= number)
    {
        for (let i = 1; i <= number; i++)
        {
            console.log(Power(1, start, i));
        }
        return Check(start + 1, number);
    }
}

function Power(start, number, exponent)
{
    if (start <= exponent)
    {
        return number * Power(start + 1, number, exponent);
    }
    return 1;
}