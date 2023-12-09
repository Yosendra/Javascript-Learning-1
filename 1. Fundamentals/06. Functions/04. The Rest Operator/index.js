
// Rest Operator (...)

// Don't confuse with the spread operator
// with spread operator we can spread an array
// which basically means take in its individual elements.
// Rest operator is used along with the parameter of a function.

function sum(...args) {
    // console.log(args)    // array
    return args.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3));

// rest operator should be put at the end of parameter definition
function calculatePrice(dicscount, ...prices) { 
    const total = prices.reduce((a, b) => a + b)
    return total * (1 - dicscount)
}
console.log(calculatePrice(0.1, 20, 30));
