const student = { "name": "Alex", "age": 10, "salary": 20 };

//3.1 In tên và giá trị mỗi thuộc tính của student
// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// 3.2 Tính tổng các giá trị số trong student
// let total = 0;
// for (const key in student) {
//   if (typeof student[key] === "number") {
//     total += student[key];
//   }
// }
// console.log(total);

// 3.3 Tạo mảng chứa tên các thuộc tính của student
let newArr= [];

for (const key in student) {
  newArr.push(key);
}

console.log(newArr);
