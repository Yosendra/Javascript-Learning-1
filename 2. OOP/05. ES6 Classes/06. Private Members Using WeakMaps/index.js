// WeakMap is dictionary, where keys are object
// If there are no reference to the keys, they will be destroyed by Garbage Collector
const _radius = new WeakMap()
const _move = new WeakMap()

class Circle {
    constructor(radius) {
        _radius.set(this, radius)   // private, set the value

        _move.set(this, () => {    // private method
            console.log('move', this)   
            // this (function declaration) -> undefined (automatic strict mode)
            // this (arrow function) -> 'this' value in containing function which is Circle itself
        })
    }

    draw() {
        _move.get(this)();
        console.log(_radius.get(this)) // private, get the value
    }
}

const c = new Circle(1)
console.log(c)
c.draw()
