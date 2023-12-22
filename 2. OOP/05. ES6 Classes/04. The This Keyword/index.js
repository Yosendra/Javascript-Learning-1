// 'use strict'

const Circle = function() {
    this.draw = function() {console.log(this)}
}
const c = new Circle()
// method call
c.draw() // Circle

const draw = c.draw
// function call
draw()   // Window, when using strict mode 'this' keyword become 'undefined'

// By default the body of the class executed the 'strict' mode
class Circle_ {
    draw() {
        console.log(this);
    }
}
const circle = new Circle_();
const draw_ = circle.draw;
draw_();  // undefined