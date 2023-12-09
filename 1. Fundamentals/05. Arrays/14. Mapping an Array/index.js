
let numbers = [1, -1, 2, 3]

// mapping each element in array to something, then aggregate each result as an array 
let filtered = numbers.map(value => '<li>' + value + '</li>')
console.log(filtered);

// study case if you want to render html elements
const html = '<ul>' + filtered.join('') + '</ul>'
console.log(html);

// If you want to return array of object with '.map()'
// notice at ({ value }), we surround { value } with parenthesis 
// to avoid javascript rendering the {} as part of arrow function
filtered = numbers.map(value => ({ value }))
console.log(filtered);

// We can use a concept that we call chaining method call
// this possible because each instance method call return an object of array
// which provide the instance method that we can call subsequently
const items = numbers
                .filter(value => value >= 0)
                .map(value => ({ value }))
                .filter(obj => obj.value > 1)
                .map(value => ({ value }))
console.log(items);

