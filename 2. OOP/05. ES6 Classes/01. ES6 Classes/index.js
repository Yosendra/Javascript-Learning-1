
// Old way define class in Javascript
function Circle(radius) {
    this.radius = radius

    this.draw = function() {
        console.log('draw')
    }
}

// Rewrite using ES6 class syntax
class CircleNew {
    constructor(radius) {
        this.radius = radius    // define properties here
    }

    draw() {
        console.log('draw')
    }
}

const c = new CircleNew(1)
console.log(c);