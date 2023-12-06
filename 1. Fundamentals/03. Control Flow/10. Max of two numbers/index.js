
function Max(a, b){
    let maxValue = 0;

    // Using 'if-else' statement
    if (a < b) 
        maxValue = b;
    else 
        maxValue = a;

    // Using ternary operator
    // maxValue = a > b ? a : b;

    return maxValue;
}

console.log("Max value is", Max(10, 11));   // 11