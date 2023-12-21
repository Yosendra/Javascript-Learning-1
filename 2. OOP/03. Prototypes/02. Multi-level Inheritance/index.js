
let myArray = []

console.log(myArray.__proto__) // Prototype of Array
console.log(myArray.__proto__.__proto__) // Prototype of Object

// inside the prototype of Array there is also prototype of object. It is like a chaining of prototype
// myArray ----> Prototype of Array ----> Prototype of Object

function Circle(radius) {
    this.radius = radius

    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1)
// this prototype is the prototype for all circle object that we create using Circle Function Constructor
console.log(circle.__proto__) // lets call this circleBase
console.log(circle.__proto__.__proto__) // prototype of object, lets call this objectBase

// circle ---> circleBase ---> objectBase

// Object created by given constructor will have the same prototype
