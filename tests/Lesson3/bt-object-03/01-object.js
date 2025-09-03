//Bài 1: Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe.
// let car = {
//     make : "Toyota",
//     model: "corolla",
//     year: 2021
// }
// console.log(`Nam san xua cua xe la: ${car.year}`);

//Bài 2: Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này.
// const person = {
//     name: "Hien",
//     address: {
//         street: "367 Bình Đà",
//         city: "Hà Nội",
//         country: "Bình Minh"
//     }
// }
// console.log(`Đường của người này là: ${person.address.street}`)

//Bài 3: Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
// Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là mộtobject với 2 thuộc tính kiểu number: math và english
// const student = {
//     name: "Ngọc Anh",
//     grades:{
//         math: 7,
//         english: 9
//     }
// }
// console.log(`Hiển thị điểm môn toán: ${student['grades']['math']}`);

//Bài 4: Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
//volume, brightness. Thay đổi volume và in ra object mới.
// let settings = {
//     volume: 30,
//     brightness: 22
// }
// console.log(`${settings.volume}`);
// settings.volume = 88;
// console.log(`${settings.volume}`);

//Bài 5:Tạo một object bike và sau đó thêm thuộc tính color vào object đó
// let bike = {

// }
// console.log(bike);
// bike.color = "Red";
// console.log(`${bike.color}`);

//Bài 6: Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này
// let employee = {
//     name: "Trâm",
//     age: 36
// }
// console.log(employee);
// delete employee.age;
// console.log(employee);

//Bài 7:Một trường học có các lớp học và học sinh như sau:
//  classA: An, Bình, Châu
// classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh
// Vd:
// const school = { classA: ["Giang"]...}

// let school = {
//     classA : ['An','Bình','Châu'],
//     classB : ['Đào','Hương','Giang']
// }
// console.log(`Class A có 3 học sinh là: ${school['classA']}`);
// console.log(`Class B có 3 học sinh là: ${school['classB']}`);