# Lesson 06: Git, javascript advance
## Outline
1. Git
2. Javascript: Class

```markdown
- Working directory
- staging
- repository
- remote repository => chính la GitHub, GitLab, Bitbucket
```

### 1. Git: Clone
- Clone: lấy dự án đã có sẵn từ vùng Remote repository(github) về máy tính của bạn
- Khi clone về và thay đổi tên project trên máy tính thì dùng câu lệnh dưới dây 
`git clone <url><new-name>`
`Ví dụ: ex: git clone <ssh_key>playwright-course`

### 2. Git: branch = nhánh
- Chia nhánh code cho thuận tiện hơn

```markdown
***git branch <branch_name> => Tạo ra 1 branch mới *** 
***git checkout <branch_name> => di chuyển sang vị trí nhánh để làm việc***
***git checkout -b <branch_name> => vừa tạo ra branch mới & vừa swich sang branch đó để làm việc***
```

### 2. Git: push
- Đẩy những cái thay đổi lên vùng repository từ local lên vùng remote repository


