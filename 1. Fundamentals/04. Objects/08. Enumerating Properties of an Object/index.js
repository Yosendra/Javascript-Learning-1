
const circle = {
    radius: 1,
    draw(){
        console.log("draw");
    }
};

// iterate through key
for (let key in circle)
    console.log(key, circle[key]);

// for (let key of circle)     // object circle not itrable, throw exception
//     console.log(key);

// Object.keys() return array of keys
for (let key of Object.keys(circle))
    console.log(key);

// Object.entries() return array of key-value pairs
for (let entry of Object.entries(circle))
    console.log(entry);

// 'in' operator check is circle contain 'color' key
if ('color' in circle)
    console.log("yes");