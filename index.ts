//an array of grades
let grades =[32,44,66,77,99];
//calculating an average grade
let averagegrade = grades.reduce((total,grade)=>total + grade,0)/ grades.length;

console.log(averagegrade);