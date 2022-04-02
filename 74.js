// Number Pattern (RECURSION)
function Pattern(start, middle, str)
{
    if (start <= 5)
    {
        if (middle <= start)
        {
            str += start;
            return Pattern(start, middle + 1, str);
        }
        console.log(str);
        middle = 0;
        str = "";
        return Pattern(start + 1, middle, str);
    }
}

Pattern(1, 1, "");