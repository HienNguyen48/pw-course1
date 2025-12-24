# Lesson 06: 
## Outline
- Git
- Javascript: Class

### 1. Git - clone
- clone: lấy dự án đã có sẵn (remote) về máy tính của bạn(local)
- Câu lệnh clone:
```markdown
***git clone <url>(sshkey, https) pw-cource***

- clone về với tên thư mục khác:
***git clone <ssh_key> playwright-course***
```

### 2. Git - branch
- Chi branch giúp code trwor lên thuận tiện hơn
- cú pháp:

```markdown
***git branch <branch_name>: Tạo 1 nhánh mới***
***git checkout <branch_name>: Di chuyển sang vị trí nhánh để làm việc***
***git checkout -b <branch_name>: Vừa tạo nhánh mới & vừa switch sang nhánh đó để làm việc***
```

### 2. Git - push
- Push: đưa code từ vùng repossitory lên server 
- cú pháp:

```markdown
***git push <remote_name><branch_name>***
***git push origin main***

`Lưu ý: Từ hôm nay sẽ đẩy lên nhánh mà mình tạo. Mình làm việc trên nhánh nào thì mình sẽ đẩy lên nhánh đấy`
```

### 3. Git - pull
- Pull: lấy dữ liệu về
- Pull & Clone
    - Pull: chỉ lấy dữ liệu từ nhánh đó về máy => sử dụng nhiều lần để lấy được giữ liệu mới nhất ở nhánh mong muốn về local của mình 
    - clone: lấy cả repo về => chỉ lấy 1 lần duy nhất để lấy cả repo về

- cú pháp:

```markdown
***git pull <remote_name><branch_name>***
***git pull origin main***
***git pull origin branchA***

`Lưu ý: Tấn suất pull phải như 1 thói quen => lên git pull dữ liệu mới nhất trước khi checkout sáng 1 nhánh khác làm việc`

```

### 4. Git - Stashing/ Git stash pop
- Git stashing: Lưu các công việc đang làm vào 1 vung nhớ tạm
- Git Unstashing: Lấy các công việc trong vùng nhớ tạm ra 

- Khi đang làm công việc A => mà được giao công việc B => thì lưu công việc A vào vùng nhớ tạm

- cú pháp:
```markdown
***git stashing: Cú pháp lưu vào bộ nhớ tạm***
***git stash pop: cú pháp lấy từ bộ nhớ tạm ra để làm việc tiếp***

```

- các step:
```markdown
***1. Trước khi làm 1 feture (Khi tạo mới branch, bạn lưu ý: Luôn luôn chuyển về nhánh main và thực hiện pull code. Tên branch cần theo naming convention của lớp) mới luôn luôn phải: git pull origin main => Already up to date.=> giống với repo trên gitHub rồi ***
***2. git checkout -b feat/5 => checkout sang nhánh feat 5 => hoặc có thể kiểm tra đang đứng ở branch nào bằng cú pháp: git branch. Đang ở nhánh nào thì sẽ có dấu (*) & hiển thị màu xanh (Ảnh:https://prnt.sc/JqDvJdS1UIq8)***
***3. Nếu có feture nào có ưu tiên cao hơn cần chuyển sang làm thì lưu nó vào 1 bộ nhớ tạm của nhánh đang làm : git stash => hiển thị thông báo: Saved working directory and index state WIP on feat/5: 9828130 feat:BT***
***4. Để làm 1 feature mới thì phải checkout về main: git checkout main => sau đó luôn luôn phải: git pull origin main***
***5. Tạo 1 feature mới: git checkout -b feat/6 ***
***6.  Nếu sau khi đã làm xong ở nhánh feat 6 rồi => muốn checkout về làm lại nhánh feat/5 thì mình sẽ checkout lại về nhánh feat 5: git checkout feat/5 để tiếp tục làm việc ***
***7. Lấy được những code đã làm trước đó ra thì dùng câu lệnh: git stash pop để tiếp tục làm việc trên nhánh feat 5***
***NOTE: Với những folder hay file nào chưa đươc tracked => thì để lưu vào bộ nhớ tạm thì ta dùng câu lệnh: git stash save --all hoặc git stash -u***

```

- 1 người mới vào công ty cần làm các bước sau
```markdown
***1. Clone remmote repository về máy tính của mình***
***2. Đứng nhánh main***
***3. git pull origin main***
***4. git checkout -b branch_name để code tính năng mới***
***5 Tạo PR:***
***git add .***
***git commit -m""""***
***git push origin branch_name"***
***6. Tạo PR & add reviewer***
***7. Reviewer review xong -> Merge code ở branch_name vào nhánh main ***
```

### 5. git merge request, reviewer
#### 5.1: Git merge request
- Gộp code từ 1 nhánh sang nhánh còn lại (gộp code từ 1 nhánh sang nhánh hiện tại đang đứng và mong muốn gộp vào)

#### 5.2: Git reviewer
- Người review code
- Một lần review = một lần học từ người khác 

#### 5.2: Git convention
- convention = bộ quy tắc
- convention giúp
    - Gọn gàng, đồng bộ
    - Dễ đoán được ý đồ của PR/ commit
- convention
    - Đặt tên branch
        - feat/checkout
        - fix/fill-info
        - feat/lesson-6-long

```markdown
- convention
    `Đặt tên branch`
        - feat/checkout
        - fix/fill-info
        - feat/lesson-6-long

`<type>/<short-description>`
- type:
    - feat: tính năng mới
    - fix: sửa lỗi
    - conf: thay đổi cấu hình (config)
    - chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...


     `Viết commit message`
        - short-description: Mục đích của branch được tạo ra
```

### 6. Javascript: Class
- Class dùng để khai báo kiểu dữ liệu
- Class là 1 khuôn mẫu định nghĩa các thuộc tính & phương thức mà các đối tượng thuộc class đó sẽ có 

```markdown
- Cú pháp
    class Person {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        sayhello(){
            console.log(`Hello, my name is ${this.name}`);
        }
    }

- Trong đó:
    - Phương thức(method): Là các hàm được gắn với class. Thường được thực hiện các hành động liên quan đến đối tượng(class) đó

- Thành phần:
     - Khai báo:
     ```markdown
     class Person {
     }
     ```

     - Tên class:
     ```markdown
     ```

     - Constructor::
     ```markdown
     class Person {
        constructor() {
            console.log("Person created!");
        }
            }
     ```

     - Property::
     ```markdown
     - Cách 1: gán trong constructor
        class Person {
             constructor() {
                this.name = "John";
                this.age = 18;
                 }
        }

    - Cách 2: gán trực tiếp trong typescript/ js mới
        class Person {
            name = "John";
            age = 18;
            }
     ```

     - Methods:
     ```markdown
     class Person {
        sayHello() {
            console.log("Hello!");
            }
            }
     ```

     - Methods with parameter::
     ```markdown
     class Person {
        greet(name) {
            console.log(`Hello ${name}`);
            }
            }
     ```

```

- Ví dụ
    class Person {
  // Property mặc định
  country = "Vietnam";

  // Constructor
  constructor(name, age) {
    this.name = name;     // Property
    this.age = age;       // Property
  }

  // Method không tham số
  sayHello() {
    console.log("Hello!");
  }

  // Method có tham số
  greet(friendName) {
    console.log(`${this.name} says hi to ${friendName}`);
  }
}

// Tạo object
const p = new Person("Hiền", 25);

p.sayHello();
p.greet("Nga");

- Để chạy được Typescript thì mình sẽ sử dụng câu lênh
`Chạy code type script:  npx ts-node <path-file> hoặc npx tsx <path_file>`
`Chạy code java script:  node <path-file>`

- Class dúng để tái sử dụng code & tăng tính sử dụng code 
- method có thể có hoặc không, là các hàm gắn với class để thực hiện các hành động liên quan đến đối tượng class đó
` Lưu ý: Bỏ function ở đầu => chỉ cần ghi tên mothod & thực hiện cú pháp tương tự function thôi`
`Javascript & typescript khác nhau là: typescript phải khai báo kiểu. typescript được phát triển dựa trên javascript & playwright cũng hỗ trợ mạnh mẽ nhất dựa trên typescript`

