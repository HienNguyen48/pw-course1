import { test } from '@playwright/test';

const date = "2025-08-02";
const username = "Playwright Viet Nam";
const email = "playwrightvietnam@gmail.com";
const description = "Đây là lớp Playwright K17";
const country = "usa";

test('Exercise 1: Register Page', async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto('https://material.playwrightvn.com/');
  });

  await test.step("Click on User Registration", async () => {
    await page.locator("//a[@href ='01-xpath-register-page.html']").click();
  });

  await test.step("Fill information to all fields ", async () => {
    await page.locator('//input[@id="username"]').fill(username);
    await page.locator('//input[@id="email"]').fill(email);
    await page.locator('//input[@id="male"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//select[@id="country"]').selectOption(country);
    await page.locator('//input[@id="dob"]').fill(date);
    await page.locator('//input[@id="profile"]').setInputFiles(`tests/lesson-05/exercise/lesson-5.txt`);
    await page.locator('//textarea[@id="bio"]').fill(description);
    await page.locator('//input[@id="rating"]').fill("10");
    await page.locator('//input[@id="favcolor"]').fill("#00fffb");
    await page.locator('//div[@class="tooltip"]').hover();
    await page.locator('//input[@id="newsletter"]').check();
    await page.click('//span[@class ="slider round"]');
  });

  await test.step("Click Register button", async () => {
    await page.locator("//button[normalize-space()='Register']").click();
  });
});
