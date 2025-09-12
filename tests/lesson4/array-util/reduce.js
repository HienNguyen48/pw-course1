//Áp dụng lên mỗi phần tử của mảng & trả về 1 giá trị duy nhất
 let numbers = [2,2,4,6];
 let total = numbers.reduce((total, num) => total + num, 0);

 console.log(total);