
const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
]

// This will not found because object is reference type, so we compare the memory location 
// which of course it is different eventhough the content is same
console.log(courses.includes({ id: 1, name: 'a'}))  // false

// '.find()' accept predicate (anonymous function which return boolean value)
// return the array's element if the precicate return true 
const course = courses.find(function (course) {
    return course.name === 'a'
})
console.log(course)