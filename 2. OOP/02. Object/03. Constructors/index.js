
// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// Create object using Contructor Function
// Notice 'new' keyword
circle = new Circle(1)
circle.draw()