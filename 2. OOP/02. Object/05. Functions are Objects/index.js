
function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// type 'Circle.' in the console or this editor.
// Intellisense will showing possible properties or methods to used

console.log(Circle.constructor);    // Function is the constructor

// Unique way creating function by instantiating Function
const CircleCopiedFunction = new Function('radius', `
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
`)

circle2 = new CircleCopiedFunction(1)
circle2.draw()
