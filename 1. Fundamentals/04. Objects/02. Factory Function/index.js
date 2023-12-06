
// Problem  : what if we want to create another circle object?
// Solution : factory and constructor function

const circle = {
    radius: 1,

    draw: function(){
        console.log("draw");
    }
};

// Factory Function
function createCircle(radius) {
    return {
        radius, // equal to 'radius: radius'

        draw(){ // we can write like this instead of 'draw: function(){}', notice we also do not write 'function' keyword before 'draw()' function name
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);
circle2.draw();