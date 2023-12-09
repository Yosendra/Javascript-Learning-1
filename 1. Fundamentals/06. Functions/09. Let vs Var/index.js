
// We should avoid using 'var' keyword

start()
function start() {
    // change between 'var' and 'let' in initial expression below
    for (var i = 0; i < 5; i++)
        console.log(i);

    // When using 'let', exception will be thrown, 'i' in 'for' block is not accessible 
    // When using 'var', there is no exception, 'i' still accessible. Not the behavior we want
    console.log(i); 
}

var color = 'red'   // this will be attached to window object
let age = 30        // this doesn't