// import the circle module
// 'require' function and 'module.exports' is a part of the CommonJS format
const Circle = require('./circle')

// with this, private member will not be exposed outside the module
// Those are implementation detail. What we are exporting (in this case is Circle class), 
// is what we call the PUBLIC INTERFACE
const c = new Circle(1)
c.draw()