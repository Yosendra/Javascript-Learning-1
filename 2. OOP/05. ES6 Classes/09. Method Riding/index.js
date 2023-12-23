class Shape {
    move() {
        console.log('move')
    }
}

class Circle extends Shape { 
    move() {    // Override 'move' in parent method
        super.move()    // invoke 'move' parent's method
        console.log('circle move')
    }
}

const c = new Circle('red', 1)
console.log(c)
c.move()