import {test} from '@playwright/test';
import { title } from 'process';

let arr = [
    {title:"Người nước ngoài bỏ đầu lợn trước loạt nhà thờ Hồi giáo ở Pháp", content:"Công tố viên Paris bắt đầu điều tra sau khi 9 chiếc đầu lợn được phát hiện bên ngoài một số nhà thờ Hồi giáo ở vùng thủ đô Paris ngày 9/9, làm dấy lên lo ngại về tình trạng gia tăng thù ghét đối với người Hồi giáo. Thịt lợn bị cấm trong đạo Hồi, do loài vật này bị coi là ô uế."},
    {title:"Người phụ nữ được kỳ vọng đưa Nepal thoát khủng hoảng", content:"epal chìm vào bất ổn từ ngày 8/9, hàng chục nghìn người, chủ yếu sinh năm 1997-2012, biểu tình để phản đối lệnh cấm mạng xã hội, đòi giải tán chính phủ vì bức xúc trước tình hình kinh tế, chính trị quốc gia."},
    {title:"Việt Nam khuyến cáo công dân cân nhắc khi tới Nepal", content:"Bộ Ngoại giao khuyến cáo công dân cân nhắc, thận trọng trước khi tới Nepal, đề nghị người Việt ở Nepal tránh tới các khu vực biểu tình."},
    {title:"Israel tập kích trả đũa Houthi, ít nhất 35 người chết", content:"Quân đội Israel tấn công thủ đô Sanaa và tỉnh al-Jawf ở miền bắc Yemen, khiến ít nhất 35 người thiệt mạng và 131 người bị thương."},
    {title:"Cuộc tập kích của Israel vào thủ đô Qatar có thể khiến Trung Đông thêm hỗn loạn", content:"Israel gần đây liên tục nhắm mục tiêu một số nước láng giềng Trung Đông. Cuộc không kích vào thủ đô Sanaa của Yeman hôm 28/8 khiến lãnh đạo cơ quan hành pháp Ahmed Ghaleb Nasser al-Rahawi cùng một số quan chức cấp cao Houthi thiệt mạng."},
    {title:"Khoảnh khắc quan chức Nepal đu dây trực thăng trốn người biểu tình", content:"Loạt quan chức Nepal cùng người thân bám vào dây cáp thả từ trực thăng để thoát khỏi đám đông biểu tình đang bao vây nhà họ ở Kathmandu"},
    {title:"Israel dọa 'truy cùng diệt tận' ban lãnh đạo Hamas ở Qatar", content:"Quan chức Israel nói nước này sẽ quyết hạ ban lãnh đạo Hamas vào lần tới nếu họ vẫn sống sót sau cuộc tập kích vừa qua tại Qatar."},
    {title:"Ban lãnh đạo Hamas thoát tên lửa Israel 'vì quên điện thoại'", content:"Ban lãnh đạo Hamas được cho là thoát đòn ám sát của Israel vì rời phòng họp để cầu nguyện, bỏ lại chiếc điện thoại đã bị đối phương theo dõi."},
    {title:"Gần 120 phụ nữ Hàn khởi kiện vì từng bị ép 'mua vui' cho lính Mỹ", content:"Nhóm nạn nhân đệ đơn kiện từ tuần trước, lần đầu chính thức cáo buộc và yêu cầu quân đội Mỹ xin lỗi, các luật sư của họ nói với AFP ngày 9/9."},
    {title:"Kết cục của người bố New Zealand đưa 3 con vào rừng suốt 4 năm", content:"Ngày 8/9, cảnh sát bắn chết Phillips trong vụ đấu súng gần thị trấn Piopio hẻo lánh, sau khi họ nhận được tin báo về một vụ đột nhập cửa hàng để trộm cắp."}
]

test("Lesson05", async ({ page }) => {
    await test.step("Navigate", async() => {
    await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Open bài học 1", async() => {
    await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("Open bài học 1", async() => {
    for(let add of arr){
        await page.locator("//input[@id = 'note-title']").fill(add.title);
        await page.locator("//textarea[@id = 'note-content']").fill(add.content);
        await page.locator("//button[@id = 'add-note']").click();
    }
    

    await test.step("Seach", async() => {
        await page.locator("//input[@id = 'search']").fill("Israel");
    })
})
    });