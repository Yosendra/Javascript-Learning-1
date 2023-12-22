
function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius) {
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
// Whenever you reset the prototype of an object,
// You should also reset the constructor.
Circle.prototype.constructor = Circle

Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape()
const c = new Circle()
