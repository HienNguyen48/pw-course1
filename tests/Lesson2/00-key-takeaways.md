# Lesson 02: Git & Javascript basic
## Angenda
1. Version control system
2. Git
3. Javascript basic

### 1. Version control system
- Hệ thống quản lý các phiên bản:
VD: Google Doc sử dụng version control system để dễ quản lý các phiên bản
- Local: lưu ở máy cá nhân
- Centralize: lưu ở một máy chủ tập trung
- Distributed: lưu ở nhiều máy khác nhau 
- Local => đưa lên cloud(đưa lên mạng) => centralize => distribute (chính là Git)

### 2. Git
#### 2.1. Git
```markdown
- Git => phần mềm
- Gõ các câu lệnh
- Lưu ở máy tính cá nhân
- Nơi quản lý các phiên bản (version control system)
- Git có 3 vùng trạng thái:
    - Working Directory: Có file mới hoặc file có thay đổi
    - Staging Area: Các file đưa vào vùng chuẩn bị commit(tạo ra phiên bản)
    - Repository: Các commit (phiên bản)

***Git init: Tạo ra 3 vùng trạng thái của Git*** 

***Muốn đưa 1 file từ Directory => staging => gõ câu  lệnh: Git add <tên file>*** 

***git commit - m""feat: add test 1"" => đưa file từ vùng chuẩn bị sang vùng chứa các phiên bản (Staging sang Repository)=> Sau khi commit cái nào commit sau ở phía trên, cái nào commit trước thì ở phía dưới*** 

***git add . là add toàn bộ file từ vùng Directory  => staging***

__git status => kiểm tra xem file dang nằm ở vùng nào__
    => Trạng thái file sau khi nhấn git status 
        - file màu đỏ: vùng working directory 
        - file màu xanh: vùng staging 

__git log => kiểm tra lịch sử trên các phiên bản ở vùng repository(lịch sử commit)__

***Commit: git commit -m"message"***

__Global config là config cho tất cả các thư mục của mình__

```

#### 2.2. GitHub
```markdown
- Git => Dịch vụ
- Lưu trên online
- Là công cụ có giao diện
- Nơi upload các phiên bản Git lên đây 
```
### 3. Git -Key takeaways
#### 3.1. Trường hợp không dùng global config 
___init => config => add => commit => push___

- TH làm nhiều công ty thì có nhiều usernam/ email khác nhau thì dùng câu lệnh cho từng thư mục như sau:
```markdown
***git config user.name "Hien"***

***git config user.email "nguyenhienit94@gmail.com"***

- Ví dụ dùng cho thư mục 1 => Nếu ghi riêng cho thư mục nào đó thì điền nội dung như trên nó sẽ mặc định ghi đè nên cấu hình mặc định (git config --global user.name "Hien", git config --global user.email "nguyenhienit94@gmail.com") trước đó 

- TH dùng cho thư mục 2 =>  git config user.name"Hien1",  git config user.email"nguyenhienit951@gmail.com"
```

#### 3.1. Trường hợp dùng global config 
___init => add => commit => push___

```markdown
***git config --global user.name "Hien"***
***git config --global user.email "nguyenhienit94@gmail.com"***
=> Cấu hình mặc định => tất cả các thư mục này sẽ ăn cái cấu hình này => nếu k set gì riêng cho project thì sẽ dùng câu lệnh mặc định này 
```

### 4. Git - commit convention
- Trong lớp học, dùng convention sau: <type>: <short_description>
- Trong đó:
    - type: loại commit
        - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới 
        - feat: thêm tính năng mới, test case mới 
        - fix: sửa lỗi 1 test trước đó 
    - short_description: mô tả ngắn gọn(50 kí tự) tiếng anh hoặc tiếng việt không dấu 

### 5. Javascript - Variable
- Variable = biến, dùng để lưu trữ giá trị, có thể thay đổi giá trị được
- Khai báo 
```markdown
var<tên_biến> = giá trị; //Phạm vi toàn cục(global)
let<tên_biến> = giá trị; //Phạm vi trong cặp ngoặc{} => Nên dùng let vì dễ kiểm soát hơn
    => Sử dụng var, let khi cần gán lại biến
- Trong đó:
    - Tên biến bắt đầu bằng: tên, gạch dưới(_) hoặc $
    - Không chứa dấu cách
    - Không chứa các từ khóa: var, let, for, if.....
- Ví dụ:
    var hocSinh = "Hiền";
    let sinhVien = "Ngọc";

- In ra  tên biến: 
    console.log(hocSinh + sinhVien)
    console.log("hocSinh = " + sinhVien)

- Biến var:
    - Gán lại bình thường:
        var x = 10;
        x = 20;   // OK
        console.log(x); // 20

    - Khai báo lại biến luôn(var cho phép)
        var a = 5;
        var a = 15;  // OK (var cho phép khai báo lại)
        console.log(a); // 15

Biến let:
    - Gán lại bình thường:
        var x = 100;
        x = 200;   // OK
        console.log(x); // 200

    - Khai báo lại biến luôn(var cho phép)
        var a = 5;
        var a = 15;   // ❌ Error: Identifier 'b' has already been declared
```
### 6. Javascript - Constant
- Hằng số. Dùng để khai báo các giá trị không thể thay đổi được 
- Khai báo:
```markdown
***const <name> = <value>***
- Ví dụ: 
    const classRoom = 15;
- Sử dụng:
    console.log(classRoom);
    =>  Không cho phép gán lại biến
```
### 7. Javascript - Data types
- Data types = kiểu dữ liệu
- Có 8 loại kiểu dữ liệu:
    - String
    - Number
    - Bigint
    - Boolean
    - Undefined
    - Null
    - Symbol
    - Object
```markdown
1. String: Dùng để khai báo 1 chuỗi
- Ví dụ: "Phong", "Playwright class","Playwright Việt Nam"

2. Number: Dùng để khai báo 1 số
- Ví dụ: 100, 0, 100.5, -100.005

3. Kiểu Boolean: dùng để khai báo một giá trị kiểu đúng sai (true hoặc false):
- Ví dụ: true, false.
```

### 8. Javascript - Comparison operator
- Toán tử so sánh
- Dùng để so sánh giữa  2 biến với nhau . Kết quả sẽ trả về Boolean (true hoặc false)
- Các toán tử so sánh:
```markdown
***So sánh hơn kém: >, <***
***So sánh bằng: ==, ===, !=, !==, >=, <=***
***Tập trung so sánh hơn kém: ===, !==, >=, <=***
```

### 9. Javascript - Unary operator: Toán tử 1 ngôi
- Dùng để tăng hoặc giảm giá trị 

```markdown
***i++ bằng với i=i+1***
***i-- bằng với i=i-1***
- Ví dụ:
    const a = 10;
    a--; // a = a-1 ~ a= 10-1
    //tăng trước, tăng sau 
```

### 10. Javascript - Arithmetic operator = toán tử số học.
- Dùng cho tính toán biểu thức
- Các phép toán: +, -, *, /
    const  a = 5;
    const  b = 15;
    console.log ( a + b);
    console.log ( a / b);
    console.log ( a * b);
    console.log ( a - b);
    // áp dụng nhiều => vd như làm cho add giỏ hàng 

### 11. Javascript - Conditional 
-  Điều kiện, dùng để kiểm tra có nên thực hiện một đoạn logic không.
- Cú pháp:
```markdown
***if (<điều kiện>) { // code }.***
***Nếu điều kiện đúng sẽ chạy vào code.***
- Ví dụ:
    if(5>3){
        console.log("5 lớn hơn 3")
    }
```

### 12. Javascript - Loop
- Vòng lặp
- Dùng để thực hiện 1 đoạn logic 1 số lần nhất định
- Cú pháp:
```markdown
***for(<khởi tạo>; <điều kiện chạy>; <điều kiện tăng>) {// code }***

- Ví dụ:
    for (let i = 1; i <= 10; i++) {
        console.log("Giá trị của i là: ", i);
        }
```

### 12. Fomat code
- Windown: `Alt + Shift + F`
- Mac: `Option + Shift + F`

### 13. Javascript - Toán tử chia dư
- % sẽ trả về phần dư của phép tính.
- Giả sử:
    - 3%3 = 0 (vì 3 chia hết cho 3 dư 0)
    - 3%2 = 1 (vì 3 không chia hết cho 2, dư 1)
    - 3%1 = 0 (vì 3 chia hết 1 dư 0)
    - 1%2 = 1 (vì 1 không chia hết cho 2, dư 1)
    - 100%80 = 20 (vì 100 không chia hết cho 80, dư 20)

```markdown
- Ứng dụng tìm số chẵn, lẻ:
    - Nếu là số lẻ, chia dư cho 2 = 1: x % 2 === 1
    - Nếu là số chẵn, chia dư cho 2 = 0: x % 2 === 0
```

### 14. Javascript - In ra giá trị chuỗi - In ra giá trị biến
- In ra kiểu chuỗi
    ***console.log(“message”)***

- In ra kiểu biến
    ***console.log(<variable_name>)***

- Để in ra giá trị kiểu chuỗi và giá trị của biến ta có 2 cách:

```markdown
***console.log(“Dùng dấu cộng như sau: “ + name)***
***console.log(“Hoặc dùng dấu phẩy: “, name)***
```

### 15. Javascript - Nối chuỗi toán tử (+)
- Để nối chuỗi từ hai biến, ta sử dụng dấu cộng (+):
    - const str1 = “Hello”;
    - const str2 = “Playwright Viet Nam”
    - console.log(str1 + str2); // HelloPlaywright Viet Nam