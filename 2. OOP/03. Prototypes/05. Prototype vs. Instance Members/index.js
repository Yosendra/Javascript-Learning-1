
function Circle(radius) {
    // instance member
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    };
}

const circle1 = new Circle(1)
const circle2 = new Circle(1)

console.log(circle1.draw === circle2.draw)  // false, there are two individual methods 'draw()', but has same functionality

// Since method is always same in every object intantiated from a Contructor Function
// And we don't want the methods copied or duplicated in every object, 
// we can attach them to their 'prototype' object, since every object from the same
// Constructor Function inherit the same prototype

console.log(Circle.prototype === circle1.__proto__);    // true
console.log(Circle.prototype === circle2.__proto__);    // true

// Proven they are equal. Attach the 'draw()' method to prototype object
// And delete 'draw' key from 'circle1' and 'circle2' object
Circle.prototype.draw = function () {   // Prototype member
    console.log('draw');
}
delete circle1.draw
delete circle2.draw

// Check the 'draw()', now it is in the prototype object for all object created
// using Circle Constuctor Function
console.log(circle1.__proto__);
console.log(circle2.__proto__);

// Override toString() method
Circle.prototype.toString = function () {
    return 'Circle with radius ' + this.radius
}

console.log(circle1.toString())

// If the method we are invoked is not defined in the object itself,
// then it will keep searching to the prototype object,