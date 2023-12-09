
const numbers = [1, 2, 3, 4]

const max1 = getMax(numbers)
const max2 = getMaxWithReduce(numbers)

console.log(max1);
console.log(max2);

function getMax(array) {
    if (array.length === 0) return

    let max = 0
    for (const element of array)
        if (max < element) max = element

    return max
}

function getMaxWithReduce(array) {
    if (array.length === 0) return

    return array.reduce((a, b) => (a < b) ? b : a, 0)
}

