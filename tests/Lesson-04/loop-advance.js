/*for...in: Dùng để in ra các thuộc tính này 
Object
let student = {
    name: "Hien",
    age: 32,
    city: "Hà Nội",
    street: "Bình Minh"
};

for(let property in student){
    console.log(property); // lấy các giá trị của thuộc tính (lấy ra key)
    console.log(student[property]);// lấy giá trị của thuộc tính trong object
}

Array: for...in giúp truy cập vào phần tử và lấy ra được những giá trị index
Chỉ số vị trí sẽ bắt đầu bằng 0
let numbers = [4, 5, 76];
for(let index in numbers){
    console.log(index); // lấy ra chỉ số index
    console.log(`index: ${index} :  ${numbers[index]}`); // lấy giá trị của mảng
}
    */

//ForEach
