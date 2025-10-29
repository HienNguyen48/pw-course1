// Thay khoảng trắng bằng "." trong phoneNumber.
let phoneNumber = '0123 456 789';
phoneNumber = phoneNumber.replace(/ /g, '.');
//regex , regrex
console.log(phoneNumber);

// Thay "lỗi" bằng "bug" trong report.
let report = 'Có một lỗi trong hệ thống.';
report = report.replace('lỗi', 'bug');
console.log(report);

// Thay "," bằng "." trong numbersStr.
let numbers = '1,234,567';
numbers = numbers.replace(/,/g, '.');
console.log(numbers);
