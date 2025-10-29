import { test } from "@playwright/test";

test("Test 01", async ({ page }) => {
    await test.step("Navigate to Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    });

    await test.step("Fill info", async () => {
        await page.fill("//input[@id='username']", "Playwright");
        await page.locator("//input[@id='email']").fill("playwright@gmail.com");
        // await page.locator("//textarea[@id='bio']").pressSequentially("Hello", {
        //     delay: 200
        // })
        await page.locator("//input[@id='female']").check();
        // await page.locator("//input[@id='female']").setChecked(false); // error
        await page.locator("//input[@id='reading']").setChecked(true);
        await page.locator("//input[@id='reading']").setChecked(false);
        await page.locator("//select[@id='country']").selectOption("australia");
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/example/test-data/image.txt");
    });
});

test("Test 02", async ({ page }) => {
    await test.step("Single click", async () => {
        await page.goto("https://material.playwrightvn.com/018-mouse.html");
        await page.locator("//div[@id='clickArea']").click();
    });

    await test.step("Double click", async () => {
        await page.locator("//div[@id='clickArea']").dblclick();
        await page.locator("//div[@id='clickArea']").click({
            clickCount: 2
        });
    });

    await test.step("Shift + click", async () => {
        await page.locator("//div[@id='clickArea']").click({
            modifiers: ["Shift"]
        });
    });

    await test.step("Right click", async () => {
        await page.locator("//div[@id='clickArea']").click({
            button: "right"
        });
    });
});