
// Avoid using inheritance to create a complex hierarchy
// It is hard to maintain and fragile to change
// It is prefered to use it only if the hierarchy is only one level
// Favor COMPOSITION over INHERITANCE.

// Mixin function to support compositioning
function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

const canEat = {
    eat: function() {
        this.hunger--
        console.log('eating')
    }
}
const canWalk = {
    walk: function() {
        console.log('walking')
    }
}
const canSwim = {
    swim: function() {
        console.log('swim')
    }
}

function Person() {
}
mixin(Person.prototype, canEat, canWalk)
const person = new Person()
console.log(person)

function GoldFish() {
}
mixin(GoldFish.prototype, canEat, canSwim)
const goldFish = new GoldFish()
console.log(goldFish)
