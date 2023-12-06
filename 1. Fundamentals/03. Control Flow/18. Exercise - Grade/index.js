
// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

// Version 1
function calculateGrade(marks) {
    let total = 0; 
    let average = 0;
    let grade = "F";

    for (const mark of marks)
        total += mark; 

    average = total / marks.length;
    
    if (average < 70)
        grade = "D";
    else if (average < 80)
        grade = "C";
    else if (average < 90)
        grade = "B";
    else if (average < 100)
        grade = "A";
    
    return grade;
}

// Version 2
function calculateGradeV2(marks) {
    const total = marks.reduce((a, b) => a + b);
    const average = total / marks.length;

    return (average < 60) ? "F"
            : (average < 70) ? "D"
            : (average < 80) ? "C"
            : (average < 90) ? "B"
            : "A";
}

// Version 3
function calculateGradeV3(marks) {
    const average = calculateAverage(marks);    // invoke our defined method
    return (average < 60) ? "F"
            : (average < 70) ? "D"
            : (average < 80) ? "C"
            : (average < 90) ? "B"
            : "A";
}

// Single Responsibility Principle -> responsible to only calculating average
function calculateAverage(marks) {
    const total = marks.reduce((a, b) => a + b);
    return total / marks.length;
}

const marks = [80, 80, 50];
console.log(calculateGradeV3(marks));
console.log(calculateGradeV2(marks));
console.log(calculateGrade(marks));

