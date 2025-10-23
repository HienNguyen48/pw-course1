import { expect, test } from "@playwright/test";
//import { RegisterBasePage } from "pom/01.pom.register.page";

test.skip("Bài học 1: Register Page", async ({ page }) => {
    const registerPageOne = new RegisterBasePage(page);

    const username = "Nam";
    const email = "nam@gmail.com";
    const gender = "Male";
    const hobby = "Reading";
    const date = "2025-10-06";

    await test.step('Navigate to register page', async () => {
        await registerPageOne.navigateRegisterPage();
        await registerPageOne.gotoPage("register");
    })

    await test.step("Fill to register", async() => {
        await registerPageOne.fillUsername(username);
        await registerPageOne.fillEmail(email);
        await registerPageOne.checkGender(gender);
        await registerPageOne.checkHobbies(hobby);
        await registerPageOne.fillInterests();
        await registerPageOne.fillCountry();
        await registerPageOne.fillDateOfBirth(date);
        await registerPageOne.Btnregister();
    })


    await test.step("Verify information in table", async() => {

        const userInfo = await registerPageOne.getxpathInfoInTable();
        const actualUsername = userInfo.username;
        const actualEmail = userInfo.email;
        const actualInformation = userInfo.information;

        // Ép toàn bộ thành chuỗi 1 lần duy nhất
        const infoText = JSON.stringify(actualInformation).toLowerCase();

  // Verify username & email
        expect(actualUsername).toBe(username);
        expect(actualEmail).toBe(email);

  // Verify info details
      expect(infoText).toContain(gender.toLowerCase());
      expect(infoText).toContain(hobby.toLowerCase());
      expect(infoText).toContain(date);
      expect(infoText).toContain("yes");
});

    });
