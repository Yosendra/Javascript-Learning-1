
const numbers = [1, 2, 3]

// You can use 'for-of' loop
for (const number of numbers)
    console.log(number)

// Or you can use array's instance method '.forEach()'
numbers.forEach((number, index) => console.log(index, number))