// //Để chạy được expect => thì phải import cái assertion vào import thì mới chạy đươc => nếu k import thì sẽ báo lỗi & k gợi ý các cú pháp để mình chọn
// import { expect, test } from '@playwright/test';
// import { TIMEOUT } from 'dns';


// // asserts không có retry => khi chạy tới đó nó sẽ so sánh luôn 
// // so sánh bằng là .toBe
// // Nếu so sánh bằng cái  expect(prodprice).toBe(31); không đúng với cái nhận được là  let prodprice = 30; => thì sẽ báo lỗi
// // Cái này sẽ dùng trong API => vì API là data số, không đợi cái await 
// // Thích hợp cho việc kiểm tra logic hoặc không liên quan đén UI ở trên giao diện 

// test('demo assertion', async() => {
//     let prodprice = 30;
//     expect(prodprice).toBe(31);
// })

// //.not là ngược  lại với cái điều kiện cần so sánh
// test('demo assertion1', async() => {
//     let prodprice = 30;
//     expect(prodprice).not.toBe(31);
// })


// /*
// 2. Test web first assertion
// */

// test.skip('web first assertion', async({ page }) => {
//     await page.goto('https://material.playwrightvn.com/');

//     //Cách chờ thủ công  => chờ 1s
//     // await page.waitForTimeout(1000);
//     // let isvisible = await page.locator("//h1[text() = 'Tài liệu học automation test']").isVisible();
//     // expect(isvisible).toBe(true);

//     //Cách chờ tự động
//     await expect(page.locator("//h1[text() = 'Tài liệu học automation test']")).toBeVisible();

//     //Nếu muốn nó timeout thì có thể cái đặt bằng 2 cách => muốn cho từng locator set timeout dùng cách này
//     //Cách 1: sẽ linh hoạt hơn 
//     await expect(page.locator("//h1[text() = 'Tài liệu học automation test']")).toBeVisible(TIMEOUT: 2000);

//     //Cách 2: Cài đặt playwright.config.ts => nếu muốn nguyên 1 cái project của mình set timeout thì cấu hình ở config 
// })

