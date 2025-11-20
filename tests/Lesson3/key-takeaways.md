# Lesson 03: Git & Javascript basic(continue)
## Outline
- Git:
    - Undo actions
    - Branching model
- Javascript basic:
    - Logical operator
    - Object and array
    - Function

### 1. Git - Thay đổi commit message
- Thay đổi commit message
***git commit --amend***
    - Gõ i => vào chế độ insert
    - Gõ esc để thoát insert
    - Gõ: ":wq" => write & quite

***git commit --amend -m”message”***

### 2. Git - Undo action
- Đưa tất cả các vùng từ staging về directory: 
```markdown
***git restore --staged.***
       => Chỉ nên reset dưới local khi chưa push lên thui, nếu push lên github rồi thì k nên dùng vì sẽ thay đổi lịch sử commit => sẽ dẫn đến conflic ở máy của họ 
```

- Đưa tất cả các vùng từ repository về working directory:
```markdown
***git reset HEAD~1***
    => HEAD~1 => chính là muốn mấy commit thì mình đưa số đó vào 
```
### 3. Git - gitignore file 
- .gitignore = GitIgnore = bỏ qua 
- Dùng để bỏ qua các file không cần git theo dõi
- Khai báo cho 1 file mà mình không muốn git quản lý => khi cho 1 file vào đó thì trên menu file thuộc gitignore bị tối xám đi 
- Muốn bỏ qua cả folder thì thêm vào gitignore: tên file/
- Muốn bỏ qua 1 file bất kì thuộc folder đó thui trong gitignore: tên file/ tên folder
***Ignore file***
***<file_name>***
***Ignore folder***
***<folder-name>/***
- gitignore vẫn thuộc  git quản lý , còn những file hay folder được thêm vào gitignore thì mới là không phải git quản lý 

### 3. javascript - convention
```markdown
***snake_case: chưa dùng***
***kebab-case: tên file***
***camelCase: tên biến***
***PascalCase: tên class***
```
### 4. Branching model
- Tạo ra 1 vùng làm việc mới không ảnh hưởng đến vùng làm việc đã ổn định
```markdown
- Tạo branch:
    ***git branch <ten_branch>: Tạo branch mới ***
    ***git checkout <ten_branch>: Checkout sang branch mong muốn***
    ***git checkout -b <ten_branch>: Tạo và swicht  sang nhánh mới tạo***
     ***git branch: Kiểm tra xem trên git đang có bao nhiêu nhánh & đang đứng tại nhánh nào. Nhánh nào mà đang đứng thì sẽ có dấu (*)***

=> Lưu ý: Tên nhánh không có space, chỉ nên ghi cách nhau bơi "-"
```
### 5. console.log với and

- console.log(‘Toi la Nga’);
- console.log(“Toi la Phong”);
- console.log(`${variable_name}`)
- let name = “Nga”;
- console.log(`Toi la ${name}`);
- console.log(“Toi ten la” + name + “”)

### 6. Object
- Đối tượng dùng để lưu trữ tập hợp các giá trị cùng 1 biến hoặc hằng số 
- Khai báo:
```markdown
let/const <tên_object> = {
    <thuoc_tinh>: <gia_tri>,
    ...
}

- Trong đó:
     <thuoc_tinh>: giống quy tắc đặt tên biến
     <gia_tri>: có kiểu giống biến hoặc 1 object khác

- Ví dụ: 
    let user = {“name”: “Alex”, “age”: 10,“email”: “alex@gmail.com”}
    const product = {
        “name”: “Laptop”,
        “price”: 500,
        isWindow”: true,
        “manufacturer”: {
            “name”: “Acer”,
            “year”: 2024
            }

- Sử dụng có 2 cách gọi: dùng dấu chấm hoặc [] để đi từ cha vào con
    console.log("name = " + user.name);
    console.log(`name: ${user.name}`);
    console.log("manufacturer name = " + product.manufacturer.name);
    console.log("price = ", product["price"]);
    console.log(`price: ${product["manufacturer"]["year"]}`);

- Gán lại giá trị:
    user.age = 28
    product["manufacturer"]["year"] = 2025

- Muốn thay đổi giá trị trong object 
    <thuoc_tinh> = gia_tri_moi
    VD:
        product.name = "iphone"

- Thêm thuộc tính vào Object:
    => Để thêm thuộc tính mới vào object, chúng ta chỉ cần dùng dấu . hoặc ngoặc vuông [] để định nghĩa thuộc tính mới. Ví dụ:
    let bike = {
        make: 'Yamaha',
        model: 'YZF-R3'
        };
        
        bike.color = “Blue”;
        bike[“price new”] = 100;
        console.log(bike);
        {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100}

- Xóa thuộc tính của object
    => Để xóa thuộc tính của object, chúng ta dùng hàm delete:
    let employee = {
        name: 'Le Van C',
        age: 30,
        department: 'HR'
        };
        
        delete employee.age;
        console.log(employee);
        Kết quả:
        {name: 'Le Van C', department: 'HR'}

```

### 7. Logical operator

```markdown
1. &&: Cả 2 vế của mệnh đề đều đúng
2. ||: một trong 2 vế đúng
3. !: đảo ngược lại giá trị của mệnh đề 
```

### 8. Array 
#### Mảng số
```markdown
let numbers = [1, 2, 3, 4];
```

#### Mảng chuỗi
```markdown
let names = ["Hien", "Phuong", "An"];
```


#### Mảng đối tượng
```markdown
let user = [
    {name: "Hien1", tuoi: 25},
    {name: "Hien2", tuoi: 26},
];
```

#### Mảng đối tượng
```markdown
let user = [
    [1, 2],
    [3, 4],
];
```
```markdown
-Sử dụng:
    - Lấy ra độ dài của tất cả các giá trị trong mảng: length
        - VD: **console.log(numbers.length);**
    - Lấy ra các phần tử theo index: [0], [1], [2]
        - VD: **console.log(numbers[0])**
    - In ra mảng object:
        **users.forEach(user => {console.log(`${user.name} - ${user.age}`);});**
     - In ra mảng 2 chiều:
       **matrix.forEach(row => {console.log(row.join(" "));});**


- Ứng dụng vòng for để lấy ra được nhiều giá trị trong mảng
    **for(let i = 0; i < numbers.length; i++){console.log(listname[i]);}**

- Thêm phần tử vào mảng:
    - **arr.push(100);**      // thêm cuối
    - **arr.unshift(0);**     // thêm đầu

- Xóa phần tử trong mảng:
    - **arr.pop();**      // thêm cuối
    - **arr.shift();**     // thêm đầu

- Duyệt mảng:
    **user.forEach(user => console.log(user));**
```

### 9. Function
- Là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc tính toán cụ thể
- Khai báo:
```markdown
***function <nameFunction>() {// code}***

- Function có 2 dạng:
    - Không trả về dữ liệu
    - Trả về dữ liệu: return value => tính toán thì dùng hàm này nhiều
```

#### 1. Function cơ bản
```markdown
function sayHello(){
    console.log("Hello!")
}

sayHello();
```


#### 2. Function có chưa tham số
```markdown
function sayHello(name){
    console.log("Hello!" + name)
}

sayHello("Hien");
```


#### 3. Function có return
```markdown
function sum(a, b){
   return a + b
}

let result = sum(4, 5);
console.log(result);
```

#### 4. Function gán function vào biến
```markdown
const multiply = function sum(a, b){
   return a * b
}

console.log(multiply(3,4));
```

#### 5. Arrow function
```markdown
const add = (a, b) => a + b;

console.log(add(2, 5)); // 7
```

#### 6. Arrow function nhiều dòng

```markdown
const showInfo = (name, age) => {
  console.log("Name:", name);
  console.log("Age:", age);
};

showInfo("Hien", 25);
```

#### 7. Function nhận tham số truyền vào không giới hạn

```markdown
function total(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

console.log(total(1, 2, 3, 4)); // 10
```
#### 8. Một function truyền vào function khác

```markdown
function doTask(callback) {
  console.log("Task done!");
  callback();
}

doTask(() => {
  console.log("Callback executed!");
});
```
#### 9. function trong object

```markdown
const user = {
  name: "Hien",
  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
};

user.sayHi();
```

### 10. function trả về function

```markdown
function createMultiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

### 11. Bổ sung checkout về một revision bất kì 
- Sau mỗi commit sẽ có 1 id của commmit khi ta nhập: git log => được gọi là commit hash hay revision 

[Ảnh](tests/lesson3/image/Screenshot_105.png) 

- Để trở về revision trước ta dùng lệnh: git checkout <revision>
     VD: git checkout 7ef27fee7aa3fbd5b73b95b8b69449a4c5b0a38b

