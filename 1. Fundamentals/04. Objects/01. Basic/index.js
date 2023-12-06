
// These variables highly related to each other better put them in an object
let radius = 1;
let x = 1;
let y = 1;

// These method also related to those variables before, better to also include them 
function draw() { }
function move() { }

// object literal syntax
// The purpose of an object is to group related variables
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,

    draw: function(){
        console.log("draw");
    },
    move: function(){
        console.log("move");
    }
};

// We can access the variable and function that we have grouped to the object
console.log(circle.radius);
console.log(circle.location.x);
console.log(circle.location.y);

circle.draw();
circle.move();

// What we see here is what we refer to as Object Oriented Programming (OOP)
// Style of programming where we see a program as a collection of objects that
//  talk to each other to perform some functionality.

// function that attach to an object we call it 'method'