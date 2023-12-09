
// Hoisting -> we call a function that before its declaration in Javascript
//  this works only for 'function declaration'

// Function declaration
walk()  // hoisting
function walk() {
    console.log('walk');
}

// Function expression
// run()   // ReferenceError
let run = function(){
    console.log('run');
}