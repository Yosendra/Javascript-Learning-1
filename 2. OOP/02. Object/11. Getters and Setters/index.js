
// Case: we want to be able read the 'defaultLocation' but still
//       keeping it private.

function Circle(radius) {
    this.radius = radius

    let defaultLocation = { x: 0, y: 0 }

    this.draw = function(){
        console.log('draw')
    }

    // Create a method that responsible only to read 'defaultLocation'
    this.getDefaultLocation = function(){
        return defaultLocation
    }

    // Using Getter & Setter
    // Using this way when inside Constructor Function
    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation
        },
        set: function (value) {
            defaultLocation = value
        }
    })
}

const circle = new Circle(1)
console.log(circle.defaultLocation)
