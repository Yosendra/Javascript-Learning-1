
// for-in loop, used to be use to iterate over properties of an object
const person = {
    name: "Ali",
    age: 20
};

for (const key in person) {
    // here we use square bracket notation
    console.log(key, person[key])
}

// we can also use the for-in loop to iterate an array 
// but it is not the recommended way instead we use for-of loop
const colors = ['red', 'green', 'blue'];
for (const index in colors) {
    console.log(index, colors[index])
}