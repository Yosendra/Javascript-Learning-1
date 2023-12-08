
let numbers = [1, 2, 3, 4]
// '.indexOf()' return the index of an element in an array
// If the array not contain the element, return -1
console.log(numbers.indexOf(100))       // -1

numbers = [1, 2, 3, 1, 4]
// 'lastIndexOf()' return the last index of an element in an array 
// in case if the element we are looking is more than one
// If the array not contain the element, return -1
console.log(numbers.lastIndexOf(1))     // 3

// '.includes()' determine whether an array includes a certain element
// return boolean
console.log(numbers.includes(1))     // true