import { test, expect } from "@playwright/test";


test("Practice Test 4", async ({ page }) => {
    console.log("Starting Practice Test 4");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    console.log("Ending Practice Test 4");
})

test("Practice Test 5", async ({ page }) => {
    console.log("Starting Practice Test 5");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("GoogleWrongs")
    console.log("Ending Practice Test 5");
})

test("Practice Test 6", async ({ page }) => {
    console.log("Starting Practice Test 6");
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")
    await page.goto("https://www.google.com/");
    await page.locator("#APjFqb").pressSequentially("Playwright",{delay:1000});
    await page.locator("#APjFqb").press("Backspace");
    console.log("Ending Practice Test 6");
})
