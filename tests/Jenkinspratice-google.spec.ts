import { test, expect } from "@playwright/test";


test("Practice Test 3", async ({ page }) => {
    console.log("Starting Practice Test Google 3 ");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Google 3");
    await page.close();
})

test("Practice Test 5", async ({ page }) => {
    console.log("Starting Practice Test Google 55");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000});
    await page.locator("#APjFqb").press("Backspace");
    console.log("Ending Practice Test Google 5");
    await page.close();
})
