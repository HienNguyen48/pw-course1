import { expect, test } from "@playwright/test";
import { RegisterBasePage } from "pom/01.pom.register.page";

test("Bài học 1: Register Page", async ({ page }) => {
    const registerPageOne = new RegisterBasePage(page);

    await test.step('Navigate to register page', async () => {
        await registerPageOne.navigateRegisterPage();
        await registerPageOne.gotoPage("register");
    })

    await test.step("Fill to register", async() => {
        await registerPageOne.fillUsername("Nam");
        await registerPageOne.fillEmail("Nam@gmail.com");
        await registerPageOne.checkGender("female");
        await registerPageOne.checkHobbies("traveling");
        await registerPageOne.fillInterests();
        await registerPageOne.fillCountry();
        await registerPageOne.fillDateOfBirth("2025-20-03");
        await registerPageOne.Btnregister();
        await expect(this.page.locator(this.xpathTable)).toBeVisible();
    })





})