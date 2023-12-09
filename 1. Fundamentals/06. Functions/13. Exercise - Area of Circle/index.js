
// circle.radius
// circle.area   -> read-only

const circle = {
    radius: 1,

    get area(){
        return Math.PI * this.radius * this.radius
    }
}

console.log(circle.area);