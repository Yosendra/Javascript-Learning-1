
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error(`'array' parameter not supplied with Array() object`)

    return array.reduce((accumulator, current) => {
                let occurrence = (current === searchElement) ? 1 : 0
                return accumulator + occurrence;
            }, 0)
}

try {
    // const numbers = [1, 2, 3, 4, 1]
    const numbers = true
    const count = countOccurrences(numbers, 1)
    console.log(count);
} 
catch (error) {
    console.error(error.message);
}