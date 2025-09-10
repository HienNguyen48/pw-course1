/*const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 
*/

// 5.1 Kiểm tra scores có giá trị nào > 80 không. 
const scores = [85, 90, 78]; 
let newscores = scores.some((value) => value > 80);
console.log(newscores);

// 5.2 Kiểm tra ages có giá trị nào < 18 không. 
const ages = [18, 21, 16, 25]; 
let newsages = ages.some((value) => value <18);
console.log(newsages);


// 5.3 Kiểm tra words có từ nào dài > 5 không. 
const words = ["apple", "banana", "cherry", "date"]; 
let newswods = words.some((value) => value.length > 5);
console.log(newswods);