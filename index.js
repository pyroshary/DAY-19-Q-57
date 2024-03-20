//an array of grades
var grades = [32, 44, 66, 77, 99];
//calculating an average grade
var averagegrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averagegrade);
