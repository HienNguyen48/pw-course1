/*const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
*/

// 3.1 In tên và giá trị mỗi thuộc tính của student 
// const student = { "name": "Alex", "age": 10, "salary": 20 };
// for (let students in student){
//     console.log(students);
//     console.log(student[students]);
// }

// 3.2 Tính tổng các giá trị số trong student 
// const student = { "name": "Alex", "age": 10, "salary": 20 };
// let sum = 0;
// for (let students in student){
//     if(typeof student[students] === "number"){
//         sum+= student[students]
//     }
// }
// console.log(sum);

// 3.3 Tạo mảng chứa tên các thuộc tính của student 
const student = { "name": "Alex", "age": 10, "salary": 20 };
let newArray = Object.keys(student);
console.log(newArray);