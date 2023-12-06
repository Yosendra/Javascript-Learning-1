
// 'break' and 'continue' statement works on all looping statement

console.log("'break' statement");
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;  // stop the looping
    console.log(i);
}

console.log("'continue' statement");
let i = 0;
while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;  // skip the code execution below, then keep continuing the iteration
    } 
    console.log(i);
    i++;
}