import { test } from "@playwright/test";

test("Exercise 2: Product page", async ({ page }) => {
  await test.step("Navigate to Material Playwright Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on Product Page", async () => {
    await page.locator("//a[@href ='02-xpath-product-page.html']").click();
  });

  await test.step("Add Product 1: 2 items", async () => {
    await page.locator("//button[@data-product-id='1']").dblclick();
  });

  await test.step("Add Product 2: 3 items", async () => {
    await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
  });

  await test.step("Add Product 3: 1 item", async () => {
    await page.locator("//button[@data-product-id='3']").click();
  });
})
