const scores = [85, 90, 78];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
const totalScore = scores.reduce((total, score) => total + score, 0);

console.log(totalScore); 
// 6.2 Tính tích các giá trị trong numbers.
const product = numbers.reduce((product, number) => product * number);
// product: 1 2 6 24
// number: 1 2 3 4
console.log(product);

// 6.3 Tính tổng các giá trị trong expenses.
const totalExpense = expenses.reduce((total, expense) => total + expense, 0);
console.log(totalExpense);
