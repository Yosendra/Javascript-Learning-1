
const numbers = [1, 2, 3, 4, 1]

const count1 = countOccurrences(numbers, 1)
const count2 = countOccurrencesWithReduce(numbers, 1)

console.log(count1);
console.log(count2);

function countOccurrences(array, searchElement) {
    let count = 0

    for (const element of array)
        if (element === searchElement)
            count++

    return count
}

function countOccurrencesWithReduce(array, searchElement) {
    return array.reduce((accumulator, current) => {
                let occurrence = (current === searchElement) ? 1 : 0
                return accumulator + occurrence;
            }, 0)
}

