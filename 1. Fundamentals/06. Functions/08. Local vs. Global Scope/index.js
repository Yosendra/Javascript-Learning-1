
// global scope, 'color' not surrounded with curly bracket
// accessible even in the 'start()' and 'stop()' function block statement
const color = 'red' 

function start() {
    // local scope, 'message' only accessible inside curly bracket, 
    // cannot be accessed from outside it
    const message = 'hi'
    console.log(color);  // 'color' can still be accessed from inside this function declaration
}

function stop() {
    // local scope, 'message' same, as above
    const message = 'bye'
    const color = 'blue'    // what if we have same name variable inside this block?
    console.log(color);     // the local variable will be prioritized over the global variable
}

start()
stop()

// Not a best practice to define global variable
// because we can accidentally mutate it without knowing