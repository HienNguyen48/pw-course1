//find() => Dùng để trả về phần tử đầu tiên trong mảng thỏa điều kiện 
let number = [1, 2, 3, 5];
let result = number.find((value) => value % 2 === 1);
console.log(result);