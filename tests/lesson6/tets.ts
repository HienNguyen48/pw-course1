//Cách 1: Dung hau to
const nameStudent1 = "Xuân";
const cityStudent1 = "HN";

const nameStudent2 = "Phuong";
const cityStudent2 = "HCM";

//cach 2: dung object
let student1 = {
    name: 'Xuân', 
    city: 'HN'
}

let student2 = {
    name: 'Phuong', 
    city: 'HCM'
}

//template -> Class, dùng PascalCaseđể đặt tên cho class => BasePage
class Student {
    //thuộc tính chung (có thể có hoặc ko)
    name: string;
    city: string;
   
    //hàm khởi tạo constructor (luôn luôn có ở class)
    //this. => gán lại thuộc tính với cái thuộc tính mà mình truyền vào 
    constructor(name:string, city:string){
        this.name = name;
        this.city = city;
       
    }
    
    //method (có thể có hoặc ko); là các hàm được gắn với class để thực hiện các hành động liên quan đến đối tượng class đó
    sayMyName(){
        console.log(`My name is ${this.name}`)
    }

    //Tham số không yêu cầu điền => có dấu ?
    saySomething(message?: string){
        if(message){
            console.log(`${this.name} says: ${message}`);
        }else{
             console.log(`Nothing`);
        }
    }
    // saySomething(message: string){
    //     console.log(`${this.name} says: ${message}`);
    // }
}


const student3 = new Student("Xuan","HN");
const student4 = new Student("Xuan1","HN1");
const student5 = new Student("Xuan1","HN1");
// console.log(student3);
// console.log(student4);

// console.log(`My name is ${student3.name}`)
// console.log(`My name is ${student4.name}`)
//sử dụng hàm để gọi hàm method. Chỉ cần sửa ở method là gọi hàm ra nó cũng sẽ sửa nthe. 
student3.sayMyName();
student4.sayMyName();
student3.saySomething("Hello");
student4.saySomething();






class oto {
    //thuộc tính chung (có thể có hoặc ko)
    banh: string;
    cua: string;

    //hàm khởi tạo constructor (luôn luôn có ở class)
    //this. => gán lại thuộc tính với cái thuộc tính mà mình truyền vào 
    constructor(name:string, cua:string){
        this.banh = name;
        this.cua = cua;       
    }         
    printSoBanh(){
        console.log(`So banh is ${this.banh}`)
        console.log(`So cua is ${this.cua}`)
    } 
   
}

var xetai = new oto("6", "2");
var xecon = new oto("4", "4");
var xebuyt = new oto("8", "2");
var banhXeTai = xetai.printSoBanh();
var banhXeCon = xecon.printSoBanh();
var banhBuyt = xebuyt.printSoBanh();