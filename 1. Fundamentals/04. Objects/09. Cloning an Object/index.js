
const circle = {
    radius: 1,
    draw(){
        console.log("draw");
    }
};

// old way of copying object
const another1 = {};
for (const key in circle)
    another1[key] = circle[key];

// modern way
const another2 = Object.assign({}, circle);

// more modern way
const another3 = { ...circle }