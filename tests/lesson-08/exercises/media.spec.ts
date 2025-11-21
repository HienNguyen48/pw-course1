import { test, expect } from "@playwright/test"

test.describe("MEDIA - Media", async () => {
    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathBtnLogIn = "//input[@id='wp-submit']";
    let xpathMenuMedia = "//div[text()='Media']";
    let xpathMenuLibrary = "//a[text()='Library']";
    let xpathBtnAddNewMedia = "//h1[text()='Media Library']/following-sibling::a";
    let xpathInputFile = "//input[@type='file']";
    let xpathFile = "//h2[text()='Media list']/following::li[contains(@aria-label, 'playwright')]";
    let xpathBtnDeletePermanetly = "//a[@class='view-attachment']/following-sibling::button[text()='Delete permanently']";
    const username = "k12-mentor";
    const password = "M8kPNkjOoph4hYE#g%ERf0tr";

    test.beforeEach(async ({ page }) => {
        await test.step("Go to library page", async () => {
            await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
            await page.locator(xpathUserName).fill(username);
            await page.locator(xpathPassword).fill(password);
            await page.click(xpathBtnLogIn);
            // await page.waitForLoadState("load");
            await page.click(xpathMenuMedia);
            await page.click(xpathMenuLibrary);
        })

        page.on('dialog', async dialog => {
            await dialog.accept();
        })
    })

    test.afterEach(async ({ page }) => {
        await page.locator(xpathFile).click();
        await page.waitForLoadState("load");
        await page.locator(xpathBtnDeletePermanetly).click();

        // verify file delete success
        await page.reload();
        await expect(page.locator(xpathFile)).not.toBeVisible();
    })

    test("@MEDIA_FILES_001 - Media - upload file success", async ({ page }) => {
        await test.step("Upload file", async () => {
            debugger;
            await page.click(xpathBtnAddNewMedia);
            await page.locator(xpathInputFile).setInputFiles("tests/lesson-08/exercises/playwright.txt");
            await expect(page.locator(xpathFile)).toBeVisible();
        })

        await test.step("Reload page", async () => {
            await page.reload();

            // verify file upload success
            await expect(page.locator(xpathFile)).toBeVisible();
        })
    })
})