// Storing pattern in array (LOOP)
let array = [];

for (let i = 0; i < 5; i++)
{
    let str = "*";
    for (let j = 1; j <= i; j++)
    {
        str += "*";
    }
    array.push(str);
}
console.log(array);