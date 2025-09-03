const student = {
    'name': 'Hien', //note: key & value => luôn luôn là kiểu string => có thể để dấu '' hoặc không 
    age: 32,
    address: 'Hà Nội',
    isStudent: false,
    class: {
        name: 17
    },
};
// //In ra cái name
// console.log(`name: ${student.name}`); //Dùng dấu chấm để đi từ cha => con 
// console.log(`name: ${student.isStudent}`);
// //thay đổi tên trong object 
// student.name = 'Thu';
// console.log(`name: ${student.name}`);
// console.log(`name: ${student.class.name}`);

// //Có thể in ra theo cách khác khi k dùng chấm
// console.log(`name: ${student['class'][name]}`);

//Xóa trong Object
// delete student.isStudent;
// console.log(student);

//Thêm 1 thuộc tính mới vào Object
// student.className = "K17";
// console.log(student);
student.class.hangHoa = "mì tôm";
console.log(student);
