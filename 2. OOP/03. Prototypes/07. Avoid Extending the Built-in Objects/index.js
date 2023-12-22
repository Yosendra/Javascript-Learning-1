
// Assume shuffle() is a built-in function of array in prototype
// and we overwrite it
Array.prototype.shuflle = function () {
    // ...
}

const array = []
array.shuflle()

// You should not modify built-in object in javascript
// Don't modify objects you don't own
// Don't overwrite methods, don't add new methods or peroperties,
// and don't remove existing properties and methods because
// somewhere else in a library you might be using them, there might
// be code that is dependent on those methods in the built-in object.
// If you modify the built-in objects, you will create all sorts of issues.