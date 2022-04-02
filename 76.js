// Number Pattern (RECURSION)
function Pattern(start, middle, string)
{
    if (start <= 5)
    {
        if (middle >= start)
        {
            string += start;
            return Pattern(start, middle - 1, string);
        }
        console.log(string);
        string = "";
        middle = 5;
        return Pattern(start + 1, middle, string);
    }
}

Pattern(1, 5, "");