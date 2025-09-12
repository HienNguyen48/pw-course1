class Student {
    //thuộc tính chung (có thể có hoặc ko)
    name: string;
    city: string;


    constructor(name:string, city:string){
        this.name = name;
        this.city = city;
    }

}


var nameStudent3 = "Xuan";
var ciTyStudent3 = "HN";

var nameStudent4 = "Xuan1";
var ciTyStudent4 = "HN1";

var nameStudent5 = "Xuan1";
var ciTyStudent5 = "HN1";

console.log(`name Student3 is ${this.nameStudent3}`)
console.log(`city Student3 is ${this.ciTyStudent3}`)


console.log(`name Student4 is ${this.nameStudent4}`)

console.log(`city Student4 is ${this.ciTyStudent4}`)

console.log(`name Student5 is ${this.nameStudent5}`)

console.log(`city Student5 is ${this.ciTyStudent5}`)