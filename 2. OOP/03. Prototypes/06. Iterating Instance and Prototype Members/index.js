
function Circle(radius) {
    // instance member
    this.radius = radius;
    this.move = function () {
        console.log('move');
    };
}

const c1 = new Circle(1)

// prototype member
Circle.prototype.draw = function () {
    console.log('draw');
}

// only returns instance member (instance only)
console.log(Object.keys(c1))

// return also key in prototype, return all member (instance + prototype)
for (let key in c1)
    console.log(key);

// In javascript language we often use the word 'own' instead of instance
// own property vs prototype property
console.log(c1.hasOwnProperty('radius')) // true
console.log(c1.hasOwnProperty('draw')) // false