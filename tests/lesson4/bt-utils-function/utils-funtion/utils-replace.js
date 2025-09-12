/*
const phoneNumber = "0123 456 789"; 
const report = "Có một lỗi trong hệ thống."; 
const numbersStr = "1,234,567"; 
*/
// 1. Thay khoảng trắng bằng "." trong phoneNumber. 
// const phoneNumber = "0123 456 789"; 
// C1: 
// let newPhoneNumber = phoneNumber.replace(/ /g,'.'); // dùng regex để thay thế toàn bộ khoảng trắng 
// console.log(newPhoneNumber);

// C2: 
// let newPhoneNumber1 = phoneNumber.replaceAll(' ','.');
// console.log(newPhoneNumber1);
// console.log(phoneNumber);

// 2. Thay "lỗi" bằng "bug" trong report. 
const report = "Có một lỗi trong hệ thống."; 
let newReport = report.replace('lỗi','bug');
console.log(newReport);


// 3. Thay "," bằng "." trong numbersStr. 
const numbersStr = "1,234,567"; 
let newNumbersStr= numbersStr.replace(/,/g,'.');
console.log(newNumbersStr);
