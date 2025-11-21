import { test, expect } from '@playwright/test'


test('demo assertion', async () => {
    let prodprice = 31;
    expect(prodprice).not.toBe(30)
})

test('web first assertion', async ({ page }) => {

    //cách chờ thủ công
    // await page.goto('https://material.playwrightvn.com/');
    // await page.waitForTimeout(1000);
    // let isvisible = await page.locator(`//h1[text()='Tài liệu học automation test']`).isVisible();
    // expect(isvisible).toBe(true);



    //cách chờ tự động
    await page.goto('https://material.playwrightvn.com/');
    await expect(page.locator(`//h1[text()='Tài liệu học automation test']`)).toBeVisible({ timeout: 2000 });
})