# Lesson 04: Javascript (continue)
## Outline
- javascript:
    - Phạm vi của biến
    - Advance condition: if...else, if...else if, switch...case
    - == and !=
    - Advance loops
    - Array helper functions
    - String helper functions

### 1. Javascript advacnce concepts
- Phạm vi biến var: global
    - var có thể truy cập được vào biến trước khi được khai báo. Giá trị undefined
- Phạm vi biến let: Scope: {}
    - nên dùng let để khai báo trước xong mới xài => tránh lỗi khó phát hiện hoặc không control được phạm vi của biến 
    - trong quá trình dùng giá trị không thay đổi thì nên gán biến const để tránh thay đổi

### 2. Condition advance

#### 2.1 Cú pháp if...else 
- Có 2 điều kiện đúng/ sai 

```markdown
***if (condition) {***
    ***logic code***
    ***}else{***
        ***logic code}***

***if (điều_kiện) {***
    ***Khối lệnh nếu đúng***
    ***} else {***
        ***khối lệnh nếu sai***
```

#### 2.2 Cú pháp if...else...if 
-  dùng khi có nhiều hơn 2 điều kiện cần kiểm tra

```markdown
***if (điều_kiện1) {***
    ***// code nếu điều_kiện1 đúng***
***} else if (điều_kiện2) {***
    ***// code nếu điều_kiện2 đúng***
***} else if (điều_kiện3) {***
    ***// code nếu điều_kiện3 đúng***
***} else {***
    ***// code nếu không điều kiện nào đúng***
***}***
```

#### 2.3 Cú pháp switch...case 
- Dùng cho nhiều giá trị rời rạc của cùng 1 biến 

```markdown
***switch (biến) {***
    ***case giá_trị1:***
        ***// code khi biến = giá_trị1***
        ***break;***
    ***case giá_trị2:***
        ***// code khi biến = giá_trị2***
        ***break;***
    ***case giá_trị3:***
       ***// code khi biến = giá_trị3***
        ***break;***
    ***default:***
        ***// code khi không khớp case nào***
***}***
```

### 3. Sự khác nhau giữa == & !=
- `== & !=` convert kiểu lỏng lẻo
- `== & !=` convert giá trị về kiểu lớn hơn 

```markdown
// let result = '5' ==5; // '5' ép về kiểu số 5 luôn
// let result1 = '5' ===5; // '5' là string khác với số 5 => vừa so sánh về giá trị, vừa so sánh về kiểu dữ liệu luôn => phải giống hết mới là tru, nếu chỉ đúng 1 trong 2 thì là false 
// let result2 = 5 ===5; //true vì vừa đúng kiểu dữ liệu và vừa đúng giá trị 

// console.log(result);
// console.log(result1);
// console.log(result2);

let result4 = '5' !==5;
console.log(result4);
Toán tử !== là so sánh nghiêm ngặt (strict inequality).

Nó không ép kiểu trước khi so sánh.

'5' là string, còn 5 là number.

Vì khác kiểu dữ liệu, nên '5' !== 5 sẽ trả về true.


let result5 = '5' !=5;//khác nhau về giá trị 
console.log(result5);

Toán tử != trong JavaScript là so sánh không chặt chẽ (loose inequality).

Khi dùng != hoặc ==, JavaScript sẽ ép kiểu (type coercion) trước khi so sánh.

Cụ thể ở đây:

'5' là string

5 là number

Khi so sánh '5' != 5, JS sẽ chuyển '5' sang số → Number('5') = 5.
Và tất nhiên 5 != 5 là false.

```
`=== & !==: so sánh kiểu nghiêm ngặt`

### 4. loop advance
#### 4.1 for...in: Dùng cho Object
- Lặp qua các thuộc tính của object (Key (thuộc tính / index)) => Trả về key (string)

```markdown
- Cú pháp: 

***for(let property in student){***
***console.log(property); // lấy các giá trị của thuộc tính (lấy ra key)***
***console.log(student[property]);// lấy giá trị của thuộc tính trong object***
***}***

//for...in: Dùng để in ra các thuộc tính này 
let student = {
    name: "Hien",
    age: 32,
    city: "Hà Nội",
    street: "Bình Minh"
};

for(let property in student){
    console.log(property);
}
```

#### 4.2 forEach
- Dùng cho mảng
- Chạy qua giá trị từng phần tử của mảng(có thể lấy cả index) và thực thi một hàm callback trên mỗi phần tử đó
    => Lấy ra được những phần tử trong mảng
    => Nội dung của hàm đó mình sẽ in ra phần tử của number này 
- Đặc điểm: không thể break hay continue, chỉ dừng khi lỗi hoặc return trong callback
```markdown
***array.forEach(function(currentValue, index, array) {// code xử lý});***

- Ví dụ:
let array = [4, 8, 90];
array.forEach((value,index) => {
console.log(`${index} : ${value}`);
});
```

#### 4.3 for...of
- Dùng cho (Array, String, Map, Set....)
- Chạy qua giá trị của từng phần tử
- Khác với forEach có thể dùng break, continue
- Lặp qua để lấy trực tiếp được các giá trị của phần tử mà không cần qua index

```markdown
 let name = ['Loi', 'Uyen', 'Lan'];
 for (let names of name) {
    console.log(names);
 }
```

- Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g","h","t"]
- Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index
- Ví dụ: 
const str = "K9 2024";
for (let i = 0; i < str.length; i++){
console.log(str[i]);
}

// Kết quả in ra
K
9
2
0
2
4


