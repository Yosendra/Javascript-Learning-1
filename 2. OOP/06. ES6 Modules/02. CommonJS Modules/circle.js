// Rule of thumb about modularity
// Things that are highly related, they should go together (Cohesion)
// Analogy : In the kitchen you have glasses, plates, knives, spoons, forks.
//           You don't store clothes in the kitchen. They belong to the bedroom

// Implementation Detail
const _radius = new WeakMap()

// Public Interface
class Circle {
    constructor(radius) {
        _radius.set(this, radius)
    }

    draw() {
        console.log('Circle with radius '+ _radius.get(this))
    }
}

// keyword module refers to the current module
// exports is an object
// module.exports.Circle = Circle;

// if just one item you want to export, you can write this
module.exports = Circle