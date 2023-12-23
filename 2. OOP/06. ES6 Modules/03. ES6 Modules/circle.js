const _radius = new WeakMap()

// use 'export' keyword to expose
export class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius '+ _radius.get(this))
    }
}