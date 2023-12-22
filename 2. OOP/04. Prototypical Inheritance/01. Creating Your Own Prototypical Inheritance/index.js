
function Shape() {}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius) {
    this.radius = radius
}

// Create an object which shapeBase as the prototype
// then assign that object to Circle.prototype
Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape()
const c = new Circle()
