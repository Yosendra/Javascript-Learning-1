function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}

function Shape() {
}
Shape.prototype.duplicate = function() {
    console.log('duplicate')
}

function Circle() {
}
extend(Circle, Shape)
Circle.prototype.duplicate = function() {
    console.log('duplicate circle')
}

function Square() {
}
extend(Square, Shape)
Square.prototype.duplicate = function() {
    console.log('duplicate square')
}

// Each object provide different implementation of duplicate method

const shapes = [
    new Circle(),
    new Square()
]

for (let shape of shapes)
    shape.duplicate()   // Polymorphism, perform their own implementation

// If not in OOP style, without polymorphism
// for (let shape of shapes)
//     if (shape.type === 'Circle')
//         duplicateCircle()
//     else if (shape.type === 'Square')
//         duplicateSquare()
//     else
//         duplicateShape()