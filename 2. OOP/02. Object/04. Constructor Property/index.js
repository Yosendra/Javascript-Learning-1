
// Every object in Javascript has a property called 'constructor'
// this property references the function that was used to construct or create the object

function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw')
        }
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

circle1 = createCircle(1)
circle2 = new Circle(1)

// look more detail at browser's console
console.log(circle1.constructor)
console.log(circle2.constructor)