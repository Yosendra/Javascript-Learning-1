class Circle {
    constructor(radius) {
        this.radius = radius
    }
    // Instance Method, available in instance of a class which is object
    draw() {
    }
    // Static Method, not tied to object but to class (so not available in object)
    static parse(str) {
    }
}

const c = new Circle(1)

c.draw()            // accessible (instance)

//c.parse()         // error, not accessible
Circle.parse('str') // accessible (static, attach to class)

// Case: We use static method to create utility function that are not tied
//       to a particular object

// Example built-In utility class: Math
Math.abs(-19)
Math.floor(10.2)