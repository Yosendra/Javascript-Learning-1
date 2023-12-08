
// Notice the predicate at '.find()'

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
]

// anonymous function (with function keyword)
let course = courses.find(function (course) {
    return course.name === 'a'
})
console.log(course)

// arrow function '() => {}'
course = courses.find((course) => {  // Formal syntax
    return course.name === 'a'
})
course = courses.find(course => course.name === 'a')  // Concise syntax
console.log(course)