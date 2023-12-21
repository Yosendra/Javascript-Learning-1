
function Circle(radius) {
    this.radius = radius
}

const circle = new Circle(1)

// prototype property of the Constructor Function 'Circle' will be the prototype of all circle objects 
console.log(Circle.prototype === circle.__proto__)  // true

// prototype property of the Constructor Function 'Array' will be the prototype of all array objects 
const array = []
console.log(Array.prototype === array.__proto__)  // true
