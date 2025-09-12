/*const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 
*/

// 2.1 Lọc các giá trị trong scores > 80.
const scores = [85, 90, 78]; 
let newscores = scores.filter((value) => value > 80);
console.log(newscores);

// 2.2 Lọc các giá trị trong ages ≥ 18.
const ages = [18, 21, 16, 25];  
let newsages = ages.filter((value) => value >= 18);
console.log(newsages);

// 2.3 Lọc các từ trong words có độ dài > 5. 
const words = ["apple", "banana", "cherry", "date"]; 
let newswods = words.filter((value) => value.length > 5);
console.log(newswods);
