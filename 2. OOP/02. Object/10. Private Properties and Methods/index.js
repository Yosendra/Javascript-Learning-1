
// Abstraction -> Hide details, show essentials
// Hide the details and complexity and show or expose only the essentials

function Circle(radius) {
    this.radius = radius

    // by defining it as normal variable, the scope of 'defaultLocation'
    // and 'computeOptimumLocation' are only inside this Constructor Function
    // Public interface become simpler

    let defaultLocation = { x: 0, y: 0 }
    let computeOptimumLocation = function (){
    
    }

    this.draw = function(){
        // Closure is the key concept of this
        // 'computeOptimumLocation' is accessible inside this draw method
        // INNER function (draw) is able to access everything  inside OUTER function (Circle)
        computeOptimumLocation() // notice, we don't invoke it with 'this' keyword
        console.log('draw')
    }
}

const circle = new Circle(1)

