const scores = [85, 90, 78];
const ages = [18, 21, 16, 25]; 
const words = ["apple", "banana", "cherry", "date"];

// 3.1 Tìm giá trị đầu tiên trong scores > 80.
// const findScore = scores.find(score => score > 80);
// console.log(findScore);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
// const findAge = ages.find(age => age > 20);
// console.log(findAge);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
const findWord = words.find(word => word.length > 5);
console.log(findWord);
