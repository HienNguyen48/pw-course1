//Áp dụng vào POM

import { test } from '@playwright/test';
import { RegisterPage } from '../../pom/register.page';

test("Register page", async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await test.step("Navigate to Register Page", async () => {
        await registerPage.navigatoToRegisterpage();
    })

    await test.step("Fill info", async () => {
        await registerPage.fillUsername("Nga");
        await registerPage.fillEmail("nga@gmail.com")
    })
});