
let numbers = [1, 2, 3, 4]
console.log(numbers)

// End
const last = numbers.pop();
console.log("End", last, numbers)

// Beginning
numbers = [1, 2, 3, 4]
const first = numbers.shift();
console.log("Beginning", first, numbers)

// Middle
numbers = [1, 2, 3, 4]
const middle = numbers.splice(2, 1);
console.log("Middle", middle, numbers)
