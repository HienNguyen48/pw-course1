/*const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
*/


/*1.1 In lần lượt từng phần tử của numbers.
const numbers = [1, 2, 3];
numbers.forEach((value, index) => {
    console.log(`Index: ${index} : Number: ${value}`);
})
    */

/*1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
Cách 1: tính tổng
let total = 0;
for (let i = 0; i <=3 ; i++){
    total += i;
}
console.log(total);

Cách 2: tính tổng
const numbers = [1, 2, 3];
let sum = numbers.reduce((value, num) => value + num,0);
console.log(sum);

Tìm giá trị lớn/ nhỏ nhất trong mảng
let max = numbers.reduce((value, max) => (value > max ? value : max));
console.log(max);

let min = numbers.reduce((value, min) => (value < min ? value : min));
console.log(min);
*/

//1.3 Tạo mảng mới từ number, mỗi phần tử nhân đôi 
const numbers = [1, 2, 3];
let  newarrray = numbers.map((value) =>  value * 2);
console.log(newarrray);




