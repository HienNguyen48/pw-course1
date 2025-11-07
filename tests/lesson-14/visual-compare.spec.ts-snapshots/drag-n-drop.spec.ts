import { test, expect} from "@playwright/test";

test("Drag a drop", async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/05-xpath-drag-and-drop.html');
    const startLocator =  "#piece-1";
    const targetLocator = "//div[@data-piece = '1']";
    // Cách 1: 
    // await page.dragAndDrop(startLocator,targetLocator);

    // Cách 2
    await page.locator(startLocator).hover();
    await page.mouse.down();
    await page.locator(targetLocator).hover();
    await page.mouse.up();
});
