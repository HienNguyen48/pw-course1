import {test} from '@playwright/test';

const userName = "K17NguyenHien";
const email = "nguyenhienit94@gmail.com";
const country  = "australia";
const dateOfBirth = "2025-09-11";
const biography = "K17 Việt Nam";
const dateCustomer = "2025-09-11";


test("Lesson05", async ({ page }) => {
    await test.step("Navigate", async() => {
    await page.goto("https://material.playwrightvn.com/");
    })

     await test.step("Fill information to all fields", async() => {
     await page.locator("//a[text() ='Bài học 1: Register Page (có đủ các element)']").click();

        await page.locator("//input[@id='username']").fill(userName);

        await page.locator("//input[@id='email']").fill(email);

        const isChecked =  page.locator("//input[@id='male']").isChecked();
        await page.locator("//input[@id='male']").check();

        const isChecked1 =  page.locator("//input[@id='traveling']").isChecked();
        await page.locator("//input[@id='traveling']").check();

        await page.selectOption("//select[@id='interests']", "science");

        await page.selectOption("//select[@id = 'country']", country);

        await page.locator("//input[@id='dob']").fill(dateOfBirth);

        await page.setInputFiles("//input[@id='profile']", "tests/lesson5/import-file.png");

        await page.locator("//textarea[@id='bio']").fill(biography);

        await page.locator("//input[@id='rating']").fill("10");

        await page.locator("//input[@id='favcolor']").fill ("#004cff");

        await page.locator("//div[@class ='tooltip']").hover();

        await page.locator("//input[@id='newsletter']").check();

        await page.locator("//span[@class='slider round']").click();

        // await page.waitForSelector("//div[@id='starRating' and @data-rating = '3.3']");
        // await page.locator("//div[@id='starRating']//button[@data-value='3']").click({ timeout: 60000 });

         await test.step("Click button", async() => {
         await page.locator("//button[text()= 'Register']").click();
    })
    })
    });

