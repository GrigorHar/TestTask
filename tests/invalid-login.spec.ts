import { test, expect } from '@playwright/test';

test.describe('Invalid login - staging', () => {
  test('should display error for invalid credentials', async ({ page }) => {
    await page.goto('/');
    await page.getByLabel('Email').fill('invalid.user@example.com');
    await page.getByLabel('Password').fill('WrongPassword!');
    await page.getByRole('button', { name: 'Sign in' }).click();
    // Expect an error toast or validation message
    const errorLocator = page.locator('#toast .toast');
    await expect(errorLocator).toBeVisible({ timeout: 5000 });
  });
});
