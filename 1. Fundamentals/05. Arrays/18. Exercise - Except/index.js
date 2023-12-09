
const numbers = [1, 2, 3, 4, 1, 1]
const output = except(numbers, [1, 2])
console.log(output);

function except(array, excluded) {
    let result = []

    for (let element of array)
        if (!excluded.includes(element))
            result.push(element)

    return result
}