/*const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
*/

// 2.1 In lần lượt từng ký tự của str 
// const str = "Playwright";
// for (let i = 0; i < str.length; i ++){
//     console.log (str[i]);
// }

// 2.2 Tạo mảng đảo ngược từ str 
// const str = "Playwright";
// for (let i = str.length -1 ; i >=0 ; i --){
//     console.log(str[i]);
// }

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr 
const arr = [1, 2, 3, 4, 3, 55, 23];
let value = 3;
let firtNumber = arr.indexOf(value);
let lastNumber = arr.lastIndexOf(value);
if(firtNumber !== -1){
    console.log(`Vị trí đầu tiên của giá trị 3: ${firtNumber}`);
    console.log(`Vị trí cuối cùng của giá trị 3: ${lastNumber}`);
}else{
    console.log('không thuộc giá trị nào')
}


// 2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr 
const dupArr = [1, 2, 3, 1, 2, 4, 5];