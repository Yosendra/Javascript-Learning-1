
// We have intance property 'color' in Shape
function Shape(color) {
    this.color = color
}

Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle(radius, color) {
    // This is how we call super constructor,
    // and get the 'color' instance property of Shape
    // then attach it to Circle object
    Shape.call(this, color)
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.draw = function() {
    console.log('draw')
}

const s = new Shape('blue')
const c = new Circle(1, 'red')

console.log(c)