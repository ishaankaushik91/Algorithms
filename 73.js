// Storing pattern in array (RECURSION)
Pattern(0, 0, "", []);

function Pattern(start, middle, str, array)
{
    if (start < 5)
    {
        if (middle <= start)
        {
            str += "*";
            return Pattern(start, middle + 1, str, array);
        }
        array.push(str);
        str = "*";
        middle = 0;
        return Pattern(start + 1, middle, str, array);
    }
    console.log(array);
}