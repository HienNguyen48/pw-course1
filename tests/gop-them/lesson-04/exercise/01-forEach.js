const numbers = [1, 2, 3];

//1.1 In lần lượt từng phần tử của numbers.
// numbers.forEach(element => {
//   console.log(element);
// });

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers 
// let total = 0;
// let min = numbers[0];
// let max = numbers[0];

// numbers.forEach(num => {
//   total += num

//   if (num > max) {
//     max = num;
//   }

//   if (num < min) {
//     min = num;
//   }
// });

// console.log(total);
// console.log(min);
// console.log(max);

//1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi

let doubled = [];

numbers.forEach(num => {
  doubled.push(num * 2);
});

console.log(doubled);
