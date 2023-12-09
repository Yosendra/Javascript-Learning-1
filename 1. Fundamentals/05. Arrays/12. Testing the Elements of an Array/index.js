
// '.every()' instance method

let numbers = [1, 2, 3, 4]
let isAllPositive = numbers.every(number => number >= 0)
console.log(isAllPositive);

numbers = [-1, 2, 3, 4]
isAllPositive = numbers.every(number => number >= 0)
console.log(isAllPositive)

// '.every()' instance method

numbers = [1, 2, -3, 4]
isAtLeastOnePositive = numbers.some(number => number >= 0)
console.log(isAtLeastOnePositive);

numbers = [-1, -2, -3, -4]
isAtLeastOnePositive = numbers.some(number => number >= 0)
console.log(isAtLeastOnePositive)

// every() => check if every element matches the given criteria
//            if it found one element doesn't match the criteria, iteration stop

// some()  => check if any element matches the given criteria
//            if it found one element matches the criteria, iteration stop
