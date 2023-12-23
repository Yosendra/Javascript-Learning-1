class Shape {
    constructor(color) {
        this.color = color
    }
    move() {
        console.log('move')
    }
}

class Circle extends Shape {    // 'extends' keyword for inheritance
    constructor(color, radius) {
        super(color) // to call the parent constructor, must be called first in constructor
                     // if not, exception thrown
        this.radius = radius
    }
    draw() {
        console.log('draw')
    }
}

const c = new Circle('red', 1)
console.log(c)
c.move()
c.draw()
