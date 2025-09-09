//some kiểm tra ít nhất có 1 phần tử thỏa điều kiện, trả về true hoặc false 
let number = [2, 2, 4, 5];
let result = number.some((value) => value % 2 === 1);
console.log(result);