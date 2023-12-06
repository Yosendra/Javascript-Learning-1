
function countTruthy(array) {
    let counter = 0;
    
    for (const value of array)
        if (value) counter++;

    return counter;
}

const array = [0, null, undefined, '', 1, 2, 3];
console.log(countTruthy(array));