//Anonymous function(Hàm ẩn danh => thực tế ít sử dụng)
// Cú pháp function bình thường thì sẽ có tên
// function name(){
//     code
// }

//Cú pháp không tên:
function () {
    //code here
}

//Lambda function
// Cú pháp: 
// (tham_so) => {
//     code
// }

//Hàm nhiều tham số 
const sum = (a,b) => {
    return a + b;
}
const total = sum(2,3);

//Hàm lamda có 1 tham số => có thể bỏ dấu ()
const duplicate = x => {
    return x * 2;
}

// có thể rút ngắn hơn với TH hàm chỉ có duy nhất 1 biểu thức return 
const duplicate2 = x => x*2;

//TH hàm không có tham số => hàm chỉ cần in 1 giá trị gì đó ra màn hình thui 
() => {
    console.log("Hello word");
}
