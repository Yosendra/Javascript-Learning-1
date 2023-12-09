
// arguments -> special object that available inside function

// In declaration we don't provide parameter
function sum() {
    let total = 0
    for (const value of arguments)  // access the arguments object
        total += value
    return total
}

console.log(sum(1, 2, 3));  // Notice, when we call the sum(), we provide the argument. Weird? this is Javascript