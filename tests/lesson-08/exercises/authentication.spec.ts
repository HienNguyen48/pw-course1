import { test, expect } from "@playwright/test"

test.describe("AUTH - Authentication", async () => {
    let xpathUserName = "//input[@id='user_login']";
    let xpathPassword = "//input[@id='user_pass']";
    let xpathBtnLogIn = "//input[@id='wp-submit']";
    let xpathErrorMsg = "//div[@id='login_error']//p";
    let xpathHeadingDashboard = "//h1[text()='Dashboard']";
    let xpathHeadingAtAGlance = "//h2[text()='At a Glance']";
    let xpathHeadingActivity = "//h2[text()='Activity']";
    let invalidUserCredential = {
        userName: "k12",
        password: "invalid"
    };
    let userCredential = {
        userName: "k12-mentor",
        password: "M8kPNkjOoph4hYE#g%ERf0tr"
    };

    test.beforeEach(async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test("@AUTH_001 - Login fail", async ({ page }) => {
        await test.step("Fill username and password invalid", async () => {
            // Fill user name + password with invalid value
            await page.locator(xpathUserName).fill(invalidUserCredential.userName);
            await page.locator(xpathPassword).fill(invalidUserCredential.password);

            const actualUsername = await page.inputValue(xpathUserName);
            const actualPassword = await page.inputValue(xpathPassword);

            // verify value
            expect(actualUsername).toBe(invalidUserCredential.userName);
            expect(actualPassword).toBe(invalidUserCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click button Login
            await page.click(xpathBtnLogIn);

            // Verify error msg
            const expectedMsgError = `Error: The username ${invalidUserCredential.userName} is not registered on this site. If you are unsure of your username, try your email address instead.`
            await expect(page.locator(xpathErrorMsg)).toHaveText(expectedMsgError);

        })
    })

    test("@AUTH_002 - Login sucess", async ({ page }) => {
        await test.step("Fill username and password valid", async () => {
            // Fill user name + password with valid value
            await page.locator(xpathUserName).fill(userCredential.userName);
            await page.locator(xpathPassword).fill(userCredential.password);

            const actualUsername = await page.inputValue(xpathUserName);
            const actualPassword = await page.inputValue(xpathPassword);

            // verify value 
            expect(actualUsername).toBe(userCredential.userName);
            expect(actualPassword).toBe(userCredential.password);
        })

        await test.step("Click btn Login", async () => {
            // Click btn Login 
            await page.click(xpathBtnLogIn);
            // await page.waitForLoadState("domcontentloaded");

            // Verify url
            await expect(page).toHaveURL(/.*wp-admin/);

            // Verify heading h1 "Dashboard" display
            await expect(page.locator(xpathHeadingDashboard)).toBeVisible();

            // Verify heading 2 "At a Glance" and "Activity" display
            await expect(page.locator(xpathHeadingAtAGlance)).toBeVisible();
            await expect(page.locator(xpathHeadingActivity)).toBeVisible();
        })
    })
})