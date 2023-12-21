
// This is object literal. Containing key-value pairs
// radius & location we call them properties, draw we call it method
const circle = {
    radius: 1,
    location: {
        x: 1, y: 1
    },
    draw: function(){
        console.log('draw')
    }
}

circle.draw()