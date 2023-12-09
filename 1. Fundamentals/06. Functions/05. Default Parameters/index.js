
// implements the default parameter on 'rate' and 'years'
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}

// if we don't supply the arguments for rate and years, 
// both will use the default parameter value
console.log(interest(10000));