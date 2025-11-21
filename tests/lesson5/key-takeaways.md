# Lesson 04: Javascript (continue)
## Outline
- Function advance
- DOM
- Selector
- Playwright basic syntax

### 1. Functions advance
- ***Anonymous functions: Hàm không có tên, thường được dùng 1 lần hoặc làm đối số truyền vào các hàm khác***
```markdown
 Function (parameters) {
// Code here
}
```

-***Lambda function (arrow function): Sử dụng dấu ' => ' thay vì từ khóa function ***
```markdown
(parameters) => {
// Code here
}
```

```markdown
//Hàm nhiều tham số 
const sum = (a,b) => {
    return a + b;
}
const total = sum(2,3);

//Hàm lamda có 1 tham số => có thể bỏ dấu ()
const duplicate = x => {
    return x * 2;
}

// có thể rút ngắn hơn với TH hàm chỉ có duy nhất 1 biểu thức return 
const duplicate2 = x => x*2;

//TH hàm không có tham số => hàm chỉ cần in 1 giá trị gì đó ra màn hình thui 
() => {
    console.log("Hello word");
}
```

### 2. DOM
- Node(Element): là những phần tử, là các thẻ trên trang web
    - thẻ html thường gặp
    - thẻ mở:`<option>United States</option>`
    - thẻ tự đóng thường chứa ảnh, dòng trống hoặc xuống dòng: `<img src="image.jpg" alt="Image description"/>`
    - Thẻ div => chia các khối trong trang web

#### 2.1. Thẻ html thường gặp
- Thẻ div: dùng để chia các khối trong trang web
- Thẻ <h1> đến <h6>: dùng để tạo ra các header phân cấp theo thứ tự lớn đến bé
- Thẻ <form></form>: dùng để chứa 1 form thông tin
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to.
- Thẻ radio button: tạo nút chọn một (radio).
- Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
- Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
- Thẻ button: tạo nút bấm.

- Thẻ table: hiển thị bảng dữ liệu.
    - thead = table heading
        - tr = table row = 1 dòng
            - th: table heading: text in đậm

    - tbody
        - tr -> td = table data

- Thẻ date picker: tạo bộ chọn ngày.
- Thẻ slider: tạo thanh trượt.
- Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.

### 2.2. Selector
- cách chọn 1 cái element, node trên trang web
- Là cách chọn phần tử trên trang 
- Có nhiều kiểu:
    - Xpath selector:
        ```markdown
            - Cú pháp  cơ bản xpath:
                //tagname → chọn tất cả phần tử theo tên thẻ.
                Ví dụ: //div → tất cả thẻ <div>.
                
                //*[@attribute='value'] → chọn theo thuộc tính.
                Ví dụ: //input[@id='username']
                
                //tag[contains(@attribute, 'value')] → chứa giá trị.
                Ví dụ: //button[contains(@class, 'submit-btn')]
                
                //tag[text()='value'] → chọn theo text chính xác.
                Ví dụ: //span[text()='Login']
                
                //tag[contains(text(), 'value')] → chọn theo text gần đúng.
                Ví dụ: //p[contains(text(), 'Welcome')]
        ```
    - CSS selector
    - Playwright selector

- Xpath tuyệt đối: đi dọc theo cây dom bắt đầu bằng dấu /
- xpath tương đối //
- Tìm theo text => cú pháp: ***h1[text() = 'tên tex']***
- Khi 1 thẻ có id thì nên tìm theo id: ***//input[@id = 'male']***

### 3. Playwright basic syxtax

```markdown
- ***test***: đơn vị cơ bản để khai báo 1 test

- Cú pháp cở bản để khai báo 1 test:

***import { test } from '@playwright/test';***

***test('<tên test>', async ({ page }) => {***
***// Code của test***
***});***

```

```markdown
- ***step***: đơn vị nhỏ hơn test, để khai báo từng step của test case

***await test.step('Tên step', async () => {***
***// Code here***
***});***


***test('<tên test>', async ({ page }) => {***
***await test.step('Tên step', async () => {***
***// Code here***
***});***
***});***

*Lưu ý: step nên được map 1-1 với testcase để dễ dàng maintain*
```
`Tên file testcase: <tên file>.spec.ts`

#### 3.1. Basic actions

##### 3.1.1. Navigate => đi đến 1 trang web nào đó
```markdown
*await page.goto('https://pw-practice.playwrightvn.com/');*
```

##### 3.1.2. Click
```markdown
- Single click: *await page.locator("//button").click();*

- Double click: *await page.locator("//button").dblclick();*

- Click chuột phải:
*page.locator("//button").click({*
*button: 'right'*
*})*

- Click chuột phải kèm bấm phím khác
*page.locator("").click({*
*modifiers: ['Shift'],*
*})*
```
##### 3.1.3. Input
```markdown
- Fill: Giống việc bạn paste content vào một ô input: 
    *page.locator("//input").fill('Playwright Viet Nam');*

- pressSequentially: giống việc bạn gõ từng chữ  vào ô input
    *page.locator("//input").pressSequentially('Playwright*
    *Viet Nam', {*
    *delay: 100,*
    *});*

```

##### 3.1.4. Radio/ checkbox
```markdown
- Lấy giá trị hiện tại đang check hay không
    *const isChecked = page.locator("//input").isChecked();*

- Check/ Uncheck
    *page.locator("//input").check();*
    *page.locator("//input").setChecked(false);*
```

##### 3.1.5. Select option
```markdown
*await page.selectOption("//select[@id='interests']", "science");*
```


##### 3.1.5. Set input file 
```markdown
*await page.setInputFiles("//input[@id='profile']", "tests/lesson5/import-file.png");*
```

##### 3.1.5. Tương tác với confirm dialog 
```markdown
    *await test.step(""Xóa dialog"", async() => {*
        *page.on('dialog', async dialog => dialog.accept());*
        *});"*
```

### 4. Kiến thức bổ sung
#### 4.1 hover
- Để hover vào 1 phần tử, ta dùng hàm hover
```markdown
    *await page.locator("<xpath here>").hover();*
```

#### 4.2 text()
- Hàm text()dùng để tìm ra phần tử có giá trị tương ứng. Ví dụ Với DOM sau:
`<div @class=”playwright”>This is a text</div>`
- Thì để chọn phần tử này, ta dùng cú pháp như sau:
`//div[text()=’This is a text’]`

#### 4.3. contains()
- Đôi khi trong phần tử HTML, phần tử sẽ bị thừa khoảng trắng, hoặc có các giá trị không cố định trong text. Ví dụ
`<div> Tôi là Alex </div> // Text này có 1 ký tự space ở đầu và ở đuôi`
`<div> Bây giờ là: 08:07 </div> // Thời gian sẽ tuỳ vào thời điểm truy cập trang web`
- Để chọn các phần tử này, ta dùng hàm contains(<giá trị>, <giá trị contains>). Ví dụ
*//div[contains(text(), ‘Tôi là Alex’)]*
*//div[contains(text(), ‘Bây giờ là:’)]*


`Có thể dùng hàm click({ clickCount: 3}); để click số lượng mong muốn`