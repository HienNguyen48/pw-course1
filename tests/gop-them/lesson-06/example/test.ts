// let firstName = "Nga";
// firstName = 123;
// console.log(firstName);

// // Cach 1: Dung hau to
// const nameStudent1 = "Xuan";
// const cityStudent1 = "HN";

// const nameStudent2 = "Phuong";
// const cityStudent2 = "HCM";

// // Cach 2: Dung Object
// let student1 = {
//     name: "Xuan",
//     city: "HN"
// }

// let student2 = {
//     name: "Phuong",
//     city: "HCM"
// }

// Template -> Class, dung PascalCase -> BasePage
class Student {
    // thuoc tinh chung
    name: string;
    city: string;

    // ham khoi tao
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;
    }

    // method
    sayMyName() {
        console.log(`My name is ${this.name}`);
    }

    saySomething(message?: string) {
        if (message) {
            console.log(`${this.name} says: ${message}`);
        } else {
            console.log(`Nothing`);
        }
    }
}

const student1 = new Student("Xuan", "HN");
// console.log(student1);

const student2 = new Student("Phuong", "HCM");
// console.log(student2);

// console.log(`My name: ${student1.name}`);
// console.log(`My name: ${student2.name}`);
student1.sayMyName();
student2.sayMyName();
student1.saySomething("Hello");
student1.saySomething();

