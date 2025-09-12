// Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6).
let fullName = 'Nguyễn Văn A';
let lastName = fullName.substring(11);
let firstName = fullName.substring(0, 6);
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

// Trích xuất năm từ date (4 ký tự đầu).
let date = '2024-05-19';
let year = date.substring(0, 4);
console.log(year);

// Trích xuất tên miền từ email (từ sau "@").
let email = 'example@gmail.com';
let domain = email.substring(email.indexOf('@') + 1);
console.log(domain);
