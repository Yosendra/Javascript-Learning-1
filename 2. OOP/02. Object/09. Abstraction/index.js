
// Abstraction -> Hide details, show essentials
// Hide the details and complexity and show or expose only the essentials

function Circle(radius) {
    this.radius = radius

    this.defaultLocation = { x: 0, y: 0 }
    this.computeOptimumLocation = function (){
        // some logic here
    }

    // Problem with this, the 'defaultLocation' and 'computeOptimumLocation'
    // are exposed to the outside. It is vulnareble to modification
    // and it should be private only in this Contructor Function

    this.draw = function(){
        this.computeOptimumLocation()
        console.log('draw')
    }
}

const circle = new Circle(1)

