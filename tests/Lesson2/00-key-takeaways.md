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
#### 1. Git
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

__git log => kiểm tra lịch sử trên các phiên bản ở vùng repository__

__Global config là config cho tất cả các thư mục của mình__

```

#### 2. GitHub
```markdown
- Git => Dịch vụ
- Lưu trên online
- Là công cụ có giao diện
- Nơi upload các phiên bản Git lên đây 
```