// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Home Page Tests', () => {

  test('Check URL', async ({ page }) => {
    // Navigate to URL
    await page.goto('https://saucelabs.com/');

    // Check is URL is the Sauce Labs URL
    await expect(page).toHaveURL('https://saucelabs.com/');
  });

});