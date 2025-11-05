import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await page.getByRole('button', { name: 'Add to Cart' }).nth(2).click();
  await expect(page.getByRole('cell', { name: 'Product 1' })).toBeVisible({timeout: 2000});
  await expect(page.locator('#cart-items')).toContainText('$10.00');
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('hien');
  await expect(page.getByRole('textbox', { name: 'Username:' })).toHaveValue('hien');

  await expect(page.locator('#ancestor')).toMatchAriaSnapshot(`
    - heading "User Registration" [level=1]
    - text: "Username:"
    - textbox "Username:"
    - text: "Email:"
    - textbox "Email:"
    - text: "Gender:"
    - radio "Male"
    - text: Male
    - radio "Female"
    - text: "Female Hobbies:"
    - checkbox "Reading"
    - text: Reading
    - checkbox "Traveling"
    - text: Traveling
    - checkbox "Cooking"
    - text: "Cooking Interests:"
    - listbox "Interests:":
      - option "Technology"
      - option "Science"
      - option "Art"
      - option "Music"
      - option "Sports"
    - text: "Country:"
    - combobox "Country:":
      - option "United States" [selected]
      - option "Canada"
      - option "United Kingdom"
      - option "Australia"
    - text: "Date of Birth:"
    - textbox "Date of Birth:"
    - text: "Profile Picture:"
    - button "Profile Picture:"
    - text: "Biography:"
    - textbox "Biography:"
    - text: "Rate Us:"
    - slider "Rate Us:"
    - text: "5 Favorite Color:"
    - textbox: "#ff0000"
    - text: "#ff0000 Newsletter: Hover over me"
    - checkbox "Subscribe"
    - text: "Subscribe Enable Feature:"
    - checkbox "Enable Feature:"
    - text: "Star Rating: 0 Custom Date:"
    - textbox "Custom Date:"
    - button "Register"
    - table:
      - rowgroup:
        - row "STT Username Email Information Actions":
          - cell "STT"
          - cell "Username"
          - cell "Email"
          - cell "Information"
          - cell "Actions"
      - rowgroup
    - iframe
    `);

});

