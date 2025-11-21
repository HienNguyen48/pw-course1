// // map
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(num => num * 2);

// console.log(newNumbers);


// filter
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.filter(num => num % 2 === 0);
// console.log(newNumbers);

// find 
// let numbers = [1, 2, 3, 4, 5];
// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven);

// reduce()
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum);

/*
- total: bien nhan gia tri duy nhat
- num: phan tu trong mang
- 0: gia tri khoi tao dau tien cho total
*/

// some()
// let numbers = [1, 3, 3, 3, 5];
// let hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven);

// every
// let numbers = [2, 2, 2, 4, 6];
// let hasEven = numbers.every(num => num % 2 === 0);
// console.log(hasEven);

// push
// let numbers = [2, 2, 2, 4, 6];
// numbers.push(7, 8);
// console.log(numbers);

// shift
// let numbers = [2, 2, 2, 4, 6];
// let firstNumber = numbers.shift();
// console.log(firstNumber);
// console.log(numbers);

// sort: Unicode (ASCII hoac UTF-16)
/*
Mac dinh: a la so dung truoc, b la dung sau
Tang dan dung: sort((a, b) => a - b)
- a - b = negative => a < b -> a dung truoc b
- a - b = positive => a > b -> b dung truoc a

Giam dan dung: sort((a, b) => b - a)
- b - a = negative => b < a -> a dung truoc b
- b - a = positive => b > a -> b dung truoc a
*/

let numbers = [1, 2, 3, 4, 5];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);


