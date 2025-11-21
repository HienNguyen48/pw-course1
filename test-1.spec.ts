import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/');
  await page.getByRole('link', { name: 'Bài học 1: Register Page (c' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth:' }).fill('2025-12-12');
  await page.getByRole('button', { name: 'Profile Picture:' }).click();
  await page.getByRole('button', { name: 'Profile Picture:' }).setInputFiles('Screenshot_2.png');
});