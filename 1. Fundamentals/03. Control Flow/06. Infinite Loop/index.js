// Infinite loop cause the browser crash, be careful

let i = 0;
while (i < 5) {
    console.log(i);
    // Here we forget to add the increment of control variable.
    // This cause the infinite loop because the condition always true
    // i++;
}

// this cause the infinite loop, condition always met
while (true) {
    
}

// this cause the infinite loop, condition always met
do {
    
} while (true);

// this cause the infinite loop, we do not adding increment. Condition always met
for (let i = 0; i < 5; ) {
        
}