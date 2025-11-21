import {test} from '@playwright/test';

test("Lesson05", async ({ page }) => {
    await test.step("Navigate", async() => {
    await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Open bài học 3", async() => {
    await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    await test.step("Thêm mới todo", async() => {
    for(let i = 1; i<= 100; i ++){
        await page.locator("//input[@id='new-task']").fill(`todo: ${i}`);
        await page.locator("//button[@id='add-task']").click();
   }
  });

   await test.step("Xóa dialog", async() => {
   page.on('dialog', async dialog => dialog.accept());
   });

   await test.step("Xóa các đồng bộ có số lẻ", async() => {
    for(let i = 1; i <= 100; i++){
        if(i %2 === 1){//chỗ này cũng có thể để (i %2 !== 0)
            await page.locator(`//button[@id = 'todo-${i}-delete']`).click();
        }
    }
   });

    
});