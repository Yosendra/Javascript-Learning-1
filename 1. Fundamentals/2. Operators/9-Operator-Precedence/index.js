// Multiply has higher precedence than plus
// To force it to plus, we can use parentheses on plus operand
let x = 2 + 3 * 4;
let y = (2 + 3) * 4;

console.log(x);     // 14
console.log(y);     // 20
