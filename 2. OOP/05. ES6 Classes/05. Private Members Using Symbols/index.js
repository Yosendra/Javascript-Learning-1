const _radius = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius) {
        this[_radius] = radius  // become private
    }

    [_draw]() { // become private
    }
}

const c = new Circle(1)
console.log(c);