// In Javascript, we can use non-boolean operand with logical operators
// The result of logical operators not necessarily a true or false
// Depends on value of the operand involved
console.log(false || true);         // true
console.log(false || 'John');       // John
console.log(false || 1);            // 1

// Truthy or Falsy Concept
//  -> Falsy (false, null, 0, undefined, '', NaN)
//  -> Truthy (anything that not is falsy)

// In OR expression, once it found truthy, the evaluation imediately stop
// then the truthy will returned
console.log(false || 1 || 2);       // 1

// Short-Circuiting
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);          // red

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor);          // blue
