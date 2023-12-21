
// Value type : number, string, boolean, symbol, undefined, null (Primitive)
// Reference type : object, function, array (Object)

// x and y are independent variables (both contains primitve value)
let x = 10,
    y = x;

x = 20
console.log("x :", x)   // 20
console.log("y :", y)   // 10

// Change x to object
x = {value: 10} // Object
y = x

x.value = 20;

console.log("x :", x)   // 20
console.log("y :", y)   // 20, this one is also changed

// Conclusion: Primitives are copied by their VALUE,
//             Objects are copied by their REFERENCE.
