
const circle = {
    radius: 1,
};

// In javascript, we can arbitrary add property and method to an object like this
circle.color = "yellow";
circle.draw = function (){}

console.log(circle);

delete circle.color;
delete circle.draw;

console.log(circle);