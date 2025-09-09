/*const scores = [85, 90, 78]; 
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"]; 
const numbers = [1, 2, 3, 4]; 
const expenses = [50, 100, 150]; 
*/

// 3.1 Tìm giá trị đầu tiên trong scores > 80. 
const scores = [85, 90, 78]; 
let newscores = scores.find((value) => value > 80);
console.log(newscores);


// 3.2 Tìm giá trị đầu tiên trong ages > 20. 
const ages = [18, 21, 16, 25]; 
let newsages = ages.find((value) => value >= 20);
console.log(newsages);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5. 
const words = ["apple", "banana", "cherry", "date"]; 
let newswods = words.find((value) => value.length > 5);
console.log(newswods);