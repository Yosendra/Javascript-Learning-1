
let numbers = [1, 2, 3, 4]
let another = numbers

// Solution 1
numbers = []    // The syntax looks clean, but be careful, 'another' still have reference to the array so it's not completely destroyed. 

// Solution 2
numbers.length = 0  // Recommended

// Solution 3
numbers.splice(0, numbers.length)

// Solution 4
while (numbers.length > 0) {
    numbers.pop()
}

console.log(numbers)
console.log(another)