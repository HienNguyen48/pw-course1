# Markdown templates
## Giới thiệu
Responsitory này chứa tất cả các cách viết markdown và các mẫu Markdown thông dụng để sử dụng trong các dự án của bạn.

## Markdown là gì?
Markdown là một ngôn ngữ đánh dấu văn bản nhẹ (lightweight makeup language) được tạo ra bởi John Gruber vào năm 2004. Markdown cho phép  bạn viết văn bản có định dạng sử dụng cú pháp văn bản  thuần túy dễ đọc và dễ viết 

## Cú pháp Markdown cơ bản
### 1. Tiêu đề (Headers)

```markdown
# Tiêu đề cấp 1
## Tiêu đề cấp 2
### Tiêu đề cấp 3
#### Tiêu đề cấp 4
##### Tiêu đề cấp 5
###### Tiêu đề cấp 6
```
### 2. Nhấn mạnh văn bản (Text Emphasis)

```markdown
*Chữ nghiêng* hoặc _Chữ nghiêng_
**Chữ đậm** hoặc __Chữ đậm__
***Chữ đậm và nghiêng*** hoặc ___Chữ đậm và nghiêng___
~~Gạch ngang~~
`Code inline`
```

### 3. Danh sách (Lists)
**Danh sách không thứ tự**
```markdown
- Mục 1
- Mục 2
    - Sub-item 2.1
    - Sub-item 2.2
- Mục 3
    

Hoặc dùng * hoặc +
* Item A
* Item B 


• Item chính
    • Item-con 2.1
    
Hoặc dùng * hoặc +
* Item A
* Item B 
```

**Danh sách có thứ tự**
```markdown
1. Mục đầu tiên
2. Mục thứ hai
3. Mục thứ 3
    1. Sub-step 3.1
    2. Sub-step 3.2
    i. abc
```

## 4. Image
```markdown
[PLW](https://playwrightvn.com/)

![Hình ảnh logo PLWVN (Từ URL)](https://cdn2.fptshop.com.vn/unsafe/800x0/hinh_nen_con_vit_16_cc7c21f6c3.jpg)

---

![Hình ảnh từ folder images PC]()

![Văn bản thay thế](đường-dẫn-hình-ảnh.jpg)
![Văn bản thay thế](đường-dẫn-hình-ảnh.jpg "Tiêu đề hình ảnh")
```

## 5. Hiển thị code blog 
```typescript
```

```javascript
```

## 6. Trích dẫn
> Đây là một trích dẫn
> Có thể nhiều dòng
>
> > Trích dẫn lồng nhau

## 7. Đường kẻ ngang
---
hoặc
***
hoặc
___

## 8. Dạng bảng
| Test Case ID | Description | Status |
|--------------|-------------|--------|
| TC001 | Login test | Pass |
| TC002 | Logout  test | Pass |
| TC003 | Search  test | Fail |

| Cột 1 | Cột 2 | Cột 3 |
|-------|-------|-------|
| Dữ liệu 1 | Dữ liệu 2 | Dữ liệu 3 |
| Dữ liệu 4 | Dữ liệu 5 | Dữ liệu 6 |

Căn chỉnh:
| Trái | Giữa | Phải |
|:-----|:----:|-----:|
| Text | Text | Text |

## 9. Checkbox (TaskList)
- [x] Nhiệm vụ đã hoàn thành
- [ ] Nhiệm vụ chưa hoàn thành
- [ ] Nhiệm vụ khác




