
const listname = ['Hien','Uyen','Hạ','Thu','Xuân',{}, 1,false]

//Lấy ra độ dài của mảng
console.log(listname.length);

//Lấy ra giá trị trong mảng
console.log(listname[0]);//Lấy theo index thì sẽ lấy được phần tử của nó

//Lưu được nhiều kiểu dữ liệu khác nhau 
// const listname = ['Hien','Uyen','Hạ','Thu','Xuân',{}, 1,false]

//Ứng dụng vòng for để lấy ra nhiều người
for(let i = 0; i < listname.length; i++){
    console.log(listname[i]);
}