// There are two categories of type
// 1. Primitive (Value Type)
//  -> String, Number, Boolean, Undefined, null
// 2. Reference Type
//  -> Object, Array, Function

let name = "John";
let age = 21;

// We can create an object and associate some information to the object
let person = {      // This is Object literal
    name: "John",
    age: 21
};

console.log(person);

// Dot notation
person.name = "Frank";

// Bracket notation
person["age"] = 31

console.log(person);