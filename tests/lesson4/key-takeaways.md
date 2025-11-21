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

### 5. Break/ continue
#### 5.1. Break
- Chức năng thoát khỏi vòng lặp ngay lập tức, không chạy thêm gì nữa trong vòng lặp
- Tác dụng khi đã đạt được điều kiện cần thì không cần duyệt tiếp 
```markdown
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Thoát khỏi vòng lặp luôn
  }
  console.log(i);
}
// Output: 1, 2
```

#### 5.2. Continue
- Chức năng: bỏ qua lần lặp hiện tại và nhảy sang lần lặp kế tiếp 
- Tác dụng: dùng khi muốn bỏ qua một số trường hợp đặc biệt những vẫn tiếp tục vòng lặp 
```markdown
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Bỏ qua bước i = 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5
```

### 6. Utils function
#### 6.1 String utils function
```marrkdown
- String method:      
    - startsWith()
    - endsWith()
    - includes()
    - slide()
    - toUpperCase()
    - toLowerCase()
    - charAt()
    - split()
    - replace()
    - repeat()
    - trim()
    - substring()
    - indexOf()
```
##### 6.1.1. trim(): Loại bỏ những khoảng trắng ở đầu & cuối
```markdown
let str = '       Học JS         ';
console.log(str.trim());

=> kết quả: Học JS
```
##### 6.1.2. toUpperCase() & toLowerCase()
```markdown
//2. toUpperCase() & toLowerCase
let text = 'K17 playwright'
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

=> kết quả: 
k17 playwright
K17 PLAYWRIGHT
```

##### 6.1.3. includes(): Kiểm tra chuỗi con có nằm trong chuỗi chính hay không. Trả về true hoặc false
```markdown
let str = 'hoc Javascript';
console.log(str.includes('Java'));

=> Kết quả: true
```

##### 6.1.4. replace: thay thế 1 chuỗi con  bằng 1 chuỗi khác 
```markdown
let str1 = 'hoc Javascript';
let text = str1.replace('Javascript', 'JS');
console.log(text);

=> kết quả: hoc JS
```

##### 6.1.5. split() => chia 1 chuỗi thành các chuỗi con & dựa vào 1kí tự nào đó => tách chuỗi thành mảng
```markdown
let name = 'Loi, Hien, Hoa, Duong';
let result = name.split(',');
console.log(result);

=> kết quả: [ 'Loi', ' Hien', ' Hoa', ' Duong' ]


let name = 'Loi, Ha, Hang, Duong'
let result = name.split('n');
console.log(result);
//['Loi, Ha, Ha',' g, Duo',' g']

=> kết quả: 
[ 'Loi, Ha, Ha', 'g, Duo', 'g' ]
[ 'Loi', ' Ha', ' Hang', ' Duong' ]
```

##### 6.1.6. substring() => cắt chuỗi theo index truyền vào 
```markdown
let str = 'hoc JavaScript rat vui';
let result = str.substring(4,14); //index 4 => 14
let result2 = str.substring(4); //index 4 đến index cuối cùng (hết chuỗi)
console.log(result);
console.log(result2);

=> Kết quả: 
JavaScript
JavaScript rat vui
```

##### 6.1.7. indexOf() => trả về vị trí mà mình kiểm tra 
- Có thì trả về vị trí đầu tiên xuất  hiện của chuỗi con trong chuỗi chính
```markdown
let str = 'hoc JavaScript rat vui';
let result = str.indexOf('vui');
console.log(result);

=> Kết quả: 19 => chữ vui đang đứng ở vị trí 19 trong chuỗi cha 
```

##### 6.1.8. slice(start, end): cắt chuỗi theo vị trí
```markdown
let s = "JavaScript";
console.log(s.slice(0, 4));  // "Java"
console.log(s.slice(4));     // "Script"
```

##### 6.1.9. charAt(index) => lấy kí tự
```markdown
let s = "Hello";
console.log(s.charAt(1)); // "e"
```

#### 6.2 Array utils functions
```markdown
- Array methods:
    - toString()
    - join()
    - concat()
    - splice()
    - slice()
    - indexOf()
    - lastIndexOf()
    - flat()
    - forEach()
    - map()
    - filter()
    - reduce()
    - some()
    - every()
    - find()
    - findIndex()
    - sort()
    - shift
```

#### 6.2.1. Map() => Tạo ra 1 mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc 
```markdown
//Map() => Tạo ra 1 mảng mới bằng cách áp dụng 1 hàm lên từng phần tử trong mảng gốc 
let numbers = [1,2,3,5];
let doubleNumbers = numbers.map((value) => value * 2);
console.log(doubleNumbers);


//Cách 2:
// let numbers = [1,2,3,5];
// function double(value){
//     return value * 2;
// }
// let doubleNumbers = numbers.map((value) => double(value));
// console.log(doubleNumbers);

//Mảng string
//Cứ là mảng thì sẽ cộng thêm 1 
let str = ['a','b','c'];
let doubleNumbers = str.map((value) => value +1);
console.log(doubleNumbers);
```

#### 6.2.2. filter => Tạo ra 1 mảng chứa các phần tử thỏa điều kiện 
```markdown
let number = [1, 2, 3, 5];
let result = number.filter((value) => value % 2 === 0);
console.log(result);

=> kết quả: 1
```

#### 6.2.3. find() => dùng để trả về phần tử đầu tiên trong mảng thỏa điều kiện 
```markdown
let number = [1, 2, 3, 5];
let result = number.find((value) => value % 2 === 1);
console.log(result);

=> kết quả: 1
```

#### 6.2.4. some => kiểm tra ít nhất có 1 phần tử thỏa điều kiện. Trả về true hoặc false
```markdown
let number = [2, 2, 4, 5];
let result = number.some((value) => value % 2 === 1);
console.log(result);

=> kết quả: true

```

#### 6.2.5. every() tương tự some => khác cái là kiểm tra tất cả 
```markdown
let number = [2, 2, 4, 5, 7, 9];
let result = number.every((value) => value % 2 === 0);
console.log(result);

=> Kiểm tra tất cả phần tử trong mảng có phải số chẵn hay không
=> kết quả: false 
```

#### 6.2.6. shit(): Xóa phần tử đầu tiên của mảng & trả về phần tử đó 
```markdown
let number = [1,2,3,45];
let result = number.shift();
console.log(result);
console.log(number);

=> kết quả:
1
[ 2, 3, 45 ]
```


#### 6.2.7. reduce() => Áp dụng lên mỗi phần tử của mảng & trả về 1 giá trị duy nhất
```markdown
 let numbers = [2,2,4,6];
 let total = numbers.reduce((total, num) => total + num, 0);

 console.log(total);

=> kết quả: 14
=> total: tính tổng
=> num  là tính từng phần tử trong tổng 
=> khai báo biến =0 
```

#### 6.2.8. sort(): sắp xếp theo thứ tự tăng dần của mảng  hoặc theo hàm so sánh được cung cấp. =>  hàm này làm thay đổi mảng gốc 
```markdown

- ***Sắp xếp theo thứ tự của bảng mã SCSII hoặc UTF-176***
- ***Mỗi phần tử được chuyển đổi thành chuỗi trước khi so sánh*** 
==> ***típ dùng:***
- ***nếu muốn tăng dần: (a,b) => a - b;***
- ***nếu muốn giảm dần: (a,b) => b - a;***

//sort() => sắp xếp theo thứ tự tăng dần của mảng hoặc theo hàm so sánh được cung cấp. Hàm này làm thay đổi mảng gốc 
// let numbers = [2, 1, 687, 7];
// console.log(numbers.sort((a,b) => a - b));

//Sắp xếp theo thứ tự của bảng mã SCSII hoặc UTF-176
//Mỗi phần tử được chuyển đổi thành chuỗi trước khi so sánh 
//=> sắp xếp giảm dần 
// console.log(numbers.sort((a,b) => b - a));
/*
==> típ dùng:
- nếu muốn tăng dần: (a,b) => a - b;
- nếu muốn giảm dần: (a,b) => b - a;
*/

//nếu là chữ thì sort:
let str = ['a','b','f','c','k'];
// console.log(str.sort((a,b) => a - b));
// console.log(str.sort((a,b) => b - a));
console.log(str.sort());

Max/ min
let min = arr.reduce((acc, cur) => (cur < acc ? cur : acc));
let max = arr.reduce((acc, cur) => (cur > acc ? cur : acc));

```

#### 6.2.9. pop(): Xóa & trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
```markdown
let arr = [1, 2, 3];
let last = arr.pop(); // arr = [1, 2], last = 3
console.log(arr); // [1, 2]
console.log(last); // 3
```

#### 6.2.10. unshift: Thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc
```markdown
let arr = [1, 2, 3];
arr.unshift(0); // arr = [0, 1, 2, 3]
console.log(arr); // [0, 1, 2, 3]
```

#### 6.2.11. trim(): Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi mới..
```markdown
- const str = " Hello World ";
- Để xoá khoảng trắng ở đầu sử dụng trimStart()
- Để xoá khoảng trắng ở cuối sử dụng trimEnd()
```

#### 6.2.12. Note
```markdown
- Thêm / xóa:
    - push() → thêm cuối mảng
    - pop() → xóa cuối mảng
    - unshift() → thêm đầu mảng
    - shift() → xóa đầu mảng

- Duyệt mảng:
    - for
    - for...of
    - forEach()

- Xử lý dữ liệu:
    - map() → tạo mảng mới từ mảng cũ
    - filter() → lọc phần tử
    - reduce() → tính toán tích lũy
    - find() → tìm phần tử đầu tiên thỏa điều kiện
    - indexOf(), lastIndexOf() → tìm vị trí

- Chuyển mảng số thành mảng chuỗi 
    const numbers = [1, 2, 3, 4]; 
    let newNumbers = numbers.map(String);
```


