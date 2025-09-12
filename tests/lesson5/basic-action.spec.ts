import {test} from '@playwright/test'; //Muốn dùng được file đó phải import test vào 

//Khai báo 1 testcase có tên Basic action => mở 1 trình duyệt để khai báo các phần tử 
test("Basic action", async ({ page }) => {
    await test.step("Navigate to Material page", async() => {
        await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Open bài học 1", async() => {
        await page.locator("//a[text() ='Bài học 1: Register Page (có đủ các element)']").click();
    })

    await test.step("Basic action", async() => {
    //fill
    await page.locator("//input[@id = 'username']").fill("K17 Playwright Việt Nam");
    //check
    await page.check("//input[@id = 'male']");

    //select - option
    await page.selectOption("//select[@id = 'country']", "australia");
    })

    //set input file 
    await page.setInputFiles("//input[@type = 'file']", "tests/lesson5/textdata.txt");

})

