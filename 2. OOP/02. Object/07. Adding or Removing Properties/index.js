
function Circle(radius) {
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1)

// add property to an object
circle.location = { x: 1 }

// property can be accessed with bracket also
circle['location'] = { x: 1 }

// delete property from an object
delete circle.location
delete circle['location']
