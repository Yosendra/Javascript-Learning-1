// Hoisting (raising to top), sayHello() can be invoked before its declaration
sayHello();

// Function Declaration
function sayHello() {}

// Function expression is not hoisted
sayGoodBye(); // error

// Function Expression
const sayGoodBye = function() {};




// Both Class Declaration and Expression are not hoisted
const c = new Circle() // error

// Class Declaration
class Circle {
}

// Class Expression
const Square = class {
}