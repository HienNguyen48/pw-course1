const str = "Playwright";

//2.1 In lần lượt từng ký tự của str 
// for (const char of str) {
//   console.log(char);
// }


//2.2 Tạo mảng đảo ngược từ str
// const reversed = [];
// for (const char of str) {
//   reversed.unshift(char);
// }

// console.log(reversed);

const arr = [1, 2, 3, 4, 3, 55, 23];
//2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
// let fistIndex = -1;
// let lastIndex = -1;
// let count = 0;

// for (const num of arr) {
//   if (num === 3) {
//     if (fistIndex === -1) {
//       fistIndex = count;
//     }
//     lastIndex = count;
//   }
//   count++;
// }

// console.log(fistIndex, lastIndex);

// 2.4  Lọc các phần tử xuất hiện 1 lần trong dupArr 
// const dupArr = [1, 2, 3, 1, 2, 4, 5];

// const countMap = {};
// for (const num of dupArr) {
//   // countMap[num] = (countMap[num] || 0) + 1;
//   if (countMap[num] === undefined) {
//     countMap[num] = 1;
//   } else {
//     countMap[num] = countMap[num] + 1;
//   }
// }
// console.log(countMap);

// const uniqueElements = [];
// for (const num of dupArr) {
//   if (countMap[num] === 1) {
//     uniqueElements.push(num);
//   }
// }

// console.log("2.4 - Phần tử chỉ xuất hiện 1 lần:", uniqueElements);

