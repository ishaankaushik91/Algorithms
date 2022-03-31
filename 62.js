// Summation of all 2 digit numbers in array (RECURSION)
let array = [1, 2, 3, 4, 12, 10, 2, 55, 9, 8];

console.log(Traversal(0, array));

function Traversal(index, array)
{
    if (index < array.length)
    {
        
        if (array[index].toString().length == 2)
        {
            return array[index] + Traversal(index + 1, array);
        }
        return Traversal(index + 1, array);
    }
    return 0;
}