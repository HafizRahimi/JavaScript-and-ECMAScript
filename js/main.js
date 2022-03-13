// Project 07 (if, else and for of loop) : Grade

let courses = [20, 18, 15, 19, 17, 16, 20.12];

function showGrade(arr) {
    totalCourses = 0;
    let grade = 0;
    for (const course of arr) {
        totalCourses += course;
        // console.log(totalCourses);
    }
    grade = totalCourses / arr.length;
    console.log(grade);
}
showGrade(courses);





let marks = [20, 10, 10, 10];

function grade(marks) {
    let sum = 0;
    for (const mark of marks) {
        sum += mark;
    }
    let average = sum / marks.length;
    console.log(average);
    if(average <= 20 && average >= 18) return "Very Good";
    if(average < 18 && average >= 16 ) return "Good";
    if(average < 16 && average >= 12 ) return "Not bad";
    if(average < 12 && average >= 10 ) return "Bad";
    if(average < 10 && average >= 0 ) return "Very Very Bad";
}

console.log(grade(marks));


