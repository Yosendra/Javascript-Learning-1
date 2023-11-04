// For constant, instead of using let, use const. So that the value of interestRate cannot be reassigned
const interestRate = 0.3;
interestRate = 1;   // This will give error in the console
console.log(interestRate);

// If you need reassigned, use let. If you don't, use const