import { test, expect } from '@playwright/test';

const baseUrl = 'https://stage.chairlyo.com/login';
  const Email = 'admin@chairlyo.com';
  const Password = 'adminpassword';


test.describe('Negative Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://stage.chairlyo.com/login');
  });

  test('Invalid Email + Valid Password', async ({ page }) => {

    await page.locator('input[name="email"]').fill('admin@chairlyo.com');
    await page.locator('input[name="password"]').fill('adminpassword');

    await page.getByRole('button', { name: /log in/i }).click();

    // Verify login failed
    //await expect(page).toHaveURL(/login/);
  });

  test('Valid Email + Invalid Password', async ({ page }) => {

    //await page.locator('input[name="email"]').fill('admin@chairlyo.com');
    //await page.locator('input[name="password"]').fill('wrongpassword');

    //await page.getByRole('button', { name: /log in/i }).click();

    // Verify login failed
    //await expect(page).toHaveURL(/login/);
  });

  test('Invalid Email + Invalid Password', async ({ page }) => {

    await page.locator('input[name="email"]').fill('wrong@chairlyo.com');
    await page.locator('input[name="password"]').fill('wrongpassword');

    await page.getByRole('button', { name: /log in/i }).click();

    // Verify login failed
    await expect(page).toHaveURL(/login/);
  });

  test('Empty Credentials', async ({ page }) => {

    //await page.getByRole('button', { name: /log in/i }).click();

  
    //await expect(page.locator('input[name="email"]')).toBeEmpty();
    //await expect(page.locator('input[name="password"]')).toBeEmpty();

    // Login should still be on login page
    //await expect(page).toHaveURL(/login/);
  });

});