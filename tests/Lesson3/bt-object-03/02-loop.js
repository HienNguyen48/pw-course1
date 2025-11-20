//bài 1: Tính tổng từ 1 đến 100.
// let sum = 0;
// for (let i = 1; i <=100 ;  i++){
//      sum += i;
// }
// console.log(sum);

//Bài 2: In bảng cửu chương từ 2 đến 9.
//Nhân
// for (let i = 1 ; i <=9 ; i++){
//     console.log(`${i}`);
//     for(let j = 1; j <=10; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
// }
// }



// Bài 3. Tạo một mảng chứa các số lẻ từ 1 đến 99.
// for(let i = 1; i<= 99; i++){
//     if(i % 2 === 1){
//         console.log (`Dãy các số lẻ ${i}`);
//     }
// }
// Bài 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:user1@example.com, user2@example.com, ..., user10@example.com).
// let user = "use";
// let path = "@example.com";
// let email = 0;
// for(let i = 1; i <= 10 ; i++){
//      email = user + i + path;
//      console.log(email);
// }


// Bài 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}
// let doanhThu12Thang = [
//     {
//         month: 1,
//         total: 50
//     },
//      {
//         month: 2,
//         total: 100
//     },
//      {
//         month: 3,
//         total: 150
//     },
//      {
//         month: 4,
//         total: 200
//     },
//      {
//         month: 5,
//         total: 25
//     },
//      {
//         month: 6,
//         total: 120
//     },
//      {
//         month: 7,
//         total: 130
//     },
//      {
//         month: 8,
//         total: 190
//     },
//     {
//         month: 8,
//         total: 60
//     },
//     {
//         month: 9,
//         total: 40
//     },
//     {
//         month: 10,
//         total: 30
//     },
//     {
//         month: 11,
//         total: 20
//     },
//     {
//         month: 1290
//     },
// ]
//  let sum =  0;
//  for(let i  = 0; i < doanhThu12Thang.length; i++){
//     if(doanhThu12Thang[i].total){
//     sum += doanhThu12Thang[i].total;
//     console.log('Tổng doanh thu 12 tháng: ',sum);
//     }
//  }