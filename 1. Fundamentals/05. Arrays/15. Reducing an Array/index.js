
let numbers = [1, -1, 2, 3]

// old way
let total = 0
for (let number of numbers)
    total += number
console.log(total);

// modern way
total = numbers.reduce((accumulator, current) => accumulator + current)
console.log(total);
