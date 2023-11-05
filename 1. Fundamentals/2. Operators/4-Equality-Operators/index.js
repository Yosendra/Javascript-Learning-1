// Strict Equality Operator
//  -> Same type + value
console.log(1 === 1);       // Output : true
console.log('1' === 1);     // Output : false


// Loose Equality Operator
console.log(1 == 1);        // Output : true
// This become true because 1 at right side will be implicitly 
// converted to the type of left side which is string
// So that that the expression become '1' == '1'
console.log('1' == 1);      // Output : true
// This one is become true == true
console.log(true == 1);      // Output : true