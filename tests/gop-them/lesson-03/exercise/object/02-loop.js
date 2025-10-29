// 1. Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 2. In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
  console.log(`Bảng cửu chương ${i}`);
  for (let j = 1; j <=10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("");
}

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
let arr = [];
for (let i = 1; i <= 99; i += 2) {
  arr.push(i);
}
console.log(arr);

// 4.In ra 10 email dựa trên tên người dùng và số thứ tự
for (let i = 1; i <= 10; i++) {
  console.log(`user${i}@example.com`);
}

// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu

const revenue = [
  { month: 1, total: 120 },
  { month: 2, total: 100 },
  { month: 3, total: 150 },
  { month: 4, total: 200 },
  { month: 5, total: 180 },
  { month: 6, total: 250 },
  { month: 7, total: 300 },
  { month: 8, total: 280 },
  { month: 9, total: 230 },
  { month: 10, total: 260 },
  { month: 11, total: 310 },
  { month: 12, total: 400 }
];

let totalRevenue = 0;

for (let i = 0; i < revenue.length; i++) {
  totalRevenue += revenue[i].total
}

console.log(`Tổng doanh thu của năm ${totalRevenue}`);
