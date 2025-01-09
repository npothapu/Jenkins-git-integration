import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.vml.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('link', { name: 'About Us' }).click();
  await expect(page.locator('h1')).toContainText('About Us');
  await page.getByRole('link', { name: 'Work', exact: true }).click();
  await expect(page.locator('h1')).toContainText('Our Work');
console.log("test 1 vml good");
await page.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.vml.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByLabel('Main').getByLabel('Contact Us').click();
  await expect(page.getByRole('heading', { name: 'Contact Us' })).toBeVisible();
  console.log("test 2 vml good");
  await page.close();
});
