
function Circle(radius) {
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(1)

for (const key in circle)
    console.log(key, circle[key])

// Iterate only property, not method
for (const key in circle)
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key])

// Get only key using static method of Object
const keys = Object.keys(circle)
console.log(keys);

// Check if property is contained in an object
if ('radius' in circle)
    console.log('Circle has a radius');