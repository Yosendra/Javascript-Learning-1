
const circle1 = {
    radius: 1,
};

function Circle() {
    this.radius = 1;
}
const circle2 = new Circle();

// Every object in javascript has property called 'constructor'
// that references the function that was used to construct or create that object.

console.log(circle1.constructor);   // in circle 1, we construct the object through object literal, so it used built-in constructor function Object()
console.log(circle2.constructor);