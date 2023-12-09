
const numbers = [2, 3, 1]

numbers.sort()
console.log(numbers)

numbers.reverse()
console.log(numbers)

// For object element, it has special treatment
const courses = [
    { id: 1, name: 'z' },
    { id: 2, name: 'a' },
]

courses.sort(function (course1, course2){
    // course1 > course2 => 1
    // course1 < course2 => -1
    // course1 == course2 => 0

    // To avoid case-sensitivity
    const nameCourse1 = course1.name.toLowerCase();
    const nameCourse2 = course2.name.toLowerCase();

    if (nameCourse1 > nameCourse2) return 1
    if (nameCourse1 < nameCourse2) return -1
    return 0
})

console.log(courses)
