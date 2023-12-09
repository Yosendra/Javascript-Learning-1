
function sum(...items){
    
    // flatten -> instead we have array of array, we want array of number
    if (items.length > 0 && Array.isArray(items[0]))
        items = [...items[0]]

    return items.reduce((acc, cur) => acc + cur, 0)
}

console.log(sum(1, 2, 3, 4));
console.log(sum([1, 2, 3, 4]));