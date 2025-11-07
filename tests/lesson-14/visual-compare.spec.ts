import { test, expect} from "@playwright/test";

test("Visual compare", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
    await expect(page).toHaveScreenshot("home-page.png")//Sử dụng toHaveScreenshot => điền tên ảnh mà mình muốn gen ra
})

test("Visual  test 01", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');
     const adsBlockLocator = page.locator("//div[@id='ads-here']");
     await expect(page).toHaveScreenshot('home-page-without-ads.png', {
        mask: [adsBlockLocator],
        maskColor: '#000000'
     })
})


