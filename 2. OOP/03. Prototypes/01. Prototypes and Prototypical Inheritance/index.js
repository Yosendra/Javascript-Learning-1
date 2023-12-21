
// Every object has 'prototype' object
// You can call prototype is the parent of an object

// To proof every object inherit from the same prototype
const x = {}
const y = {}
console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y)) // true

// toString() is not defined in x itself, but it defined in the prototype object
console.log(x.toString());
console.log(y.toString());