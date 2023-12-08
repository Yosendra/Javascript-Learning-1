
const numbers = [3, 4]

// End
numbers.push(5, 6);
console.log("End", numbers)

// Beginning
numbers.unshift(1, 2);
console.log("Beginning", numbers)

// Middle
numbers.splice(2, 0, 'a', 'b');
console.log("Middle", numbers)