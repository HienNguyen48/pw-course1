/*const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 
*/

// 6.1 Tính tổng các giá trị trong scores. 
// const scores = [85, 90, 78];
// let newscores = scores.reduce((value, index) => value + index, 0);
// console.log(newscores);

// 6.2 Tính tích các giá trị trong numbers. 
const numbers = [1, 2, 3, 4]; 
let newNumbers = numbers.reduce((value, a) => value * a, 1);
console.log(newNumbers);

// 6.3 Tính tổng các giá trị trong expenses. 
// const expenses = [50, 100, 150]; 
// let newExpenses = expenses.reduce((value, index) => value + index, 0);
// console.log(newExpenses);