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

// Overriding the duplicate method
Circle.prototype.duplicate = function() {
    // if we want to call duplicate method implemented in parent
    Shape.prototype.duplicate.call(this)

    console.log('duplicate circle')
}

const c = new Circle()
c.duplicate()