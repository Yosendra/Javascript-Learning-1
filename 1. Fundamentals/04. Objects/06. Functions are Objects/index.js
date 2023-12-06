
function Circle() {
    this.radius = 1;
}

// Function name is also an object in javascript
console.log(Circle.name);           // print function name
console.log(Circle.length);         // print number of argument
console.log(Circle.constructor);    // interesting part, Circle is made of 'Function()' built-in constructor function

// Try to create Circle constructor function with Function()
const CircleTemp = new Function("radius", `
    this.radius = 1;
`);

// Use the artificial constructor function CircleTemp()
const circle = new CircleTemp();
console.log(circle);

Circle.call({}, 1, 2, 3);
Circle.apply({}, [1, 2, 3]);
