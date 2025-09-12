//sort() => sắp xếp theo thứ tự tăng dần của mảng hoặc theo hàm so sánh được cung cấp. Hàm này làm thay đổi mảng gốc 

// let numbers = [2, 1, 687, 7];
// console.log(numbers.sort((a,b) => a - b));

//Sắp xếp theo thứ tự của bảng mã SCSII hoặc UTF-176
//Mỗi phần tử được chuyển đổi thành chuỗi trước khi so sánh 
//=> sắp xếp giảm dần 
// console.log(numbers.sort((a,b) => b - a));
/*
==> típ dùng:
- nếu muốn tăng dần: (a,b) => a - b;
- nếu muốn giảm dần: (a,b) => b - a;
*/

//nếu là chữ thì sort:
let str = ['a','b','f','c','k'];
// console.log(str.sort((a,b) => a - b));
// console.log(str.sort((a,b) => b - a));
console.log(str.sort());