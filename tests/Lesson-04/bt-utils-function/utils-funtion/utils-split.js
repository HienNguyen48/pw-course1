/*
const name = "Nguyễn Văn A"; 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
const date = "2024-05-19";
*/
// 1. Chia name thành mảng các từ (dùng khoảng trắng). 
const name = "Nguyễn Văn A"; 
let newName = name.split(' ');
console.log(newName);


// 2. Chia emails thành mảng các email (dùng dấu phẩy). 
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com"; 
let newEmails = emails.split(',');
console.log(newEmails);

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang). 
const date = "2024-05-19";
let newDate = date.split('-');
console.log(newDate);