import {test} from '@playwright/test';

test("Lesson05", async ({ page }) => {
    await test.step("Navigate", async() => {
    await page.goto("https://material.playwrightvn.com/");
    })

    await test.step("Open bài học 2", async() => {
    await page.locator("//a[text() ='Bài học 2: Product page']").click();
    await page.locator("//button[@class = 'add-to-cart' and @data-product-id = 1]").dblclick();
    await page.locator("//button[@class = 'add-to-cart' and @data-product-id = 2]").click({ clickCount: 3});
    await page.locator("//button[@class = 'add-to-cart' and @data-product-id = 3]").click();
    })


});