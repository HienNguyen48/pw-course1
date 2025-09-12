/*
const fullName = "Nguyễn Văn A"; 
const date = "2024-05-19"; 
const email = "example@gmail.com" 
*/
// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6). 
const fullName = "Nguyễn Văn A"; 
let newFullName = fullName.substring(0,6);
console.log(newFullName);

// 2. Trích xuất năm từ date (4 ký tự đầu). 
const date = "2024-05-19"; 
let newDate = date.substring(0,4);
console.log(newDate);

// 3. Trích xuất tên miền từ email (từ sau "@").
const email = "example@gmail.com" 
let newEmail = email.substring(8);
console.log(newEmail);