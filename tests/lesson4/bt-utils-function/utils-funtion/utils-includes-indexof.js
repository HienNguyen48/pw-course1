/*
const name = "Nguyễn Văn A"; 
const email = "example@gmail.com"; 
const productName = "MacBook Pro"; 
const description = "Khóa học JavaScript cơ bản"; 
*/

// 1. Includes: 
//  1.1 Kiểm tra "Nguyễn" trong name. 
// const name = "Nguyễn Văn A"; 
// console.log(name.includes('Nguyễn'));

// 1.2 Kiểm tra "@" trong email. 
// const email = "example@gmail.com"; 
// console.log(email.includes('@'));

// 1.3 Kiểm tra "Pro" trong productName. 
// const productName = "MacBook Pro"; 
// console.log(productName.includes('Pro'));

// 2. IndexOf: 
//2.1 Tìm vị trí "a" trong name. 
const name = "Nguyễn Văn A"; 
const newName = name.indexOf('a');
console.log(newName);

// 2.2 Tìm vị trí "@" trong email. 
const email = "example@gmail.com"; 
const newEmail = email.indexOf('@');
console.log(newEmail);

// 2.3 Tìm vị trí "JavaScript" trong description. 
const description = "Khóa học JavaScript cơ bản"; 
const newDescriptions = description.indexOf('JavaScript');
console.log(newDescriptions);