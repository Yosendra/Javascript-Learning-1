
let person = { name: "John" }

// this not iterate to prototype, output only print 'name'
for (const key in person)
    console.log(key);

console.log(Object.keys(person))

// The reason is because in Javascript some properties have 
// attributes attached to them, sometimes this attributes
// prevent a property to be able being enumerated.

let objectBase = Object.getPrototypeOf(person)
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString')
console.log(descriptor)

// Output - Look at the enumerable
// configurable : true
// enumerable : false
// value : ƒ toString()
// writable : true
// [[Prototype]] : Object