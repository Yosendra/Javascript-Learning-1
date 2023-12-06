
function fizzBuzz(value) {
    if (typeof value !== 'number') 
        return NaN;     // Not A Number
    
    if ((value % 3 === 0) && (value % 5 === 0))
        return "FizzBuzz";
    if (value % 3 === 0)
        return "Fizz";
    if (value % 5 === 0)
        return "Buzz";
        
    return value;
}

const output = fizzBuzz(false);
console.log(output);