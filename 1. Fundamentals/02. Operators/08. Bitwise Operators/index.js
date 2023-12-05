// 1 byte = 8 bits
// 1 = 00000001
// 2 = 00000010

// Bitwise operator similiar to logical operator,
// but they work on individual bit of a number in binary format.

// Bitwise OR (|)
// 1 = 00000001
// 2 = 00000010
//     --------
// R = 00000011 (3 in decimal format)
console.log(1 | 2);     // 3

// Bitwise AND (&)
// 1 = 00000001
// 2 = 00000010
//     --------
// R = 00000000 (0 in decimal format) 
console.log(1 & 2);     // 0 


// Study Case : Read, Write, Execute permission
// Read     -> 00000100 (4)
// Write    -> 00000010 (2)
// Execute  -> 00000001 (1)

const readPermission    = 4;
const writePermission   = 2;
const executePermission = 1;

let myPermission = 0;
// With Bitwise OR operator, we can add permission
myPermission = myPermission | readPermission;
// With Bitwise AND operator, we can check if we have a given permission
let message = (myPermission & readPermission) 
                ? "You're permitted" 
                : "You're not permitted";
console.log(message); // You're permitted

message = (myPermission & writePermission) 
                ? "You're permitted" 
                : "You're not permitted";
console.log(message); // You're not permitted


