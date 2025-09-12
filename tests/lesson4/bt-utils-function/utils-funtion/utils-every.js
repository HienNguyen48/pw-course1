/*const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 
*/

// 1. every 
// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không. 
const scores = [85, 90, 78]; 
let result = scores.every((value) => value > 70);
console.log(result);



// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không. 
const ages = [18, 21, 16, 25];
let result1 = scores.every((value) => value > 15);
console.log(result1);


// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không
const words = ["apple", "banana", "cherry", "date"]; 
let result2 = words.every((value) => value.length > 3)
console.log(result2);
