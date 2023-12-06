
// Value Type :
//  Number, String, Boolean, Symbol, undefined, null
// Reference Type :
//  Object, Function, Array

// Value Type :
let x = 10;
let y = x;
x = 20;
// x and y are two individual variable
console.log("x", x);
console.log("y", y);

// Reference Type :
x = { value: 10 };
y = x;
x.value = 20;
console.log(y.value);   // this also 20
// y is pointing to the same memory location (reference) as x

// Conslusion: Primitives are copied by their value. Object are copied by their reference.