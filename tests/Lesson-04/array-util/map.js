//Map() => Tạo ra 1 mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc 
//Cách 1
// let numbers = [1,2,3,5];
// let doubleNumbers = numbers.map((value) => value * 2);
// console.log(doubleNumbers);


//Cách 2:
// let numbers = [1,2,3,5];
// function double(value){
//     return value * 2;
// }
// let doubleNumbers = numbers.map((value) => double(value));
// console.log(doubleNumbers);

//Mảng string
//Cứ là mảng thì sẽ cộng thêm 1 
let str = ['a','b','c'];
let doubleNumbers = str.map((value) => value +1);
console.log(doubleNumbers);