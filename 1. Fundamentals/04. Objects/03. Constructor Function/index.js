
// Problem  : what if we want to create another circle object?
// Solution : factory and constructor function

const circle = {
    radius: 1,

    draw: function(){
        console.log("draw");
    }
};

// Constructor Function
function Circle(radius) {   // We use Pascal Notation, this a convention. Best practice to follow
    this.radius = radius;   // this refer to an empty object
    this.draw = function(){
        console.log("draw");
    }
}

const circle1 = new Circle(1); // Notice we use 'new' keyword following the Contructor Function to create an object
console.log(circle1);
circle1.draw();
