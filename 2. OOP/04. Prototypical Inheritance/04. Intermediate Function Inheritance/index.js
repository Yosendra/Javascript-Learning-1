
function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius, color) {
    Shape.call(this, color)
    this.radius = radius
}

// Inherit from Shape
Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle
// The code above is too lengthy everytime we create child Contructor Function, 
// so we will refactor it

// Encapsulate the inheritent code into a fucntion
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape('blue')
const c = new Circle(1, 'red')

// We use the refactor implementation, for creating Square constructor class 

function Square(size, color) {
    Shape.call(this, color)
    this.size = size
}
// This function what we call Intermediate Function Inheritance
extend(Square, Shape)   // inherit the Shape

const sq = new Square(2, 'green')
console.log(sq)