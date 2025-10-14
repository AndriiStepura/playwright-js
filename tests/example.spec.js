// @ts-check
import { test, expect } from '@playwright/test';

test('[HP-1] Create account page elements are displayed', async ({ page }) => {
  // Webkit throw timeout for default so let's increase to 60s but it still failing so let's left it for future
  // TODO take a look why webkit is failing here
  // test.setTimeout(60000);
  // await page.goto('https://paydo.com/', { timeout: 60000 });
  await page.goto('https://paydo.com/');
  await expect(page.getByRole('link', { name: 'Open account' }).first()).toBeVisible();
  await page.getByRole('link', { name: 'Open account' }).first().click();
  // await expect(page.locator('.mat-form-field-flex').first()).toBeVisible();
  await expect(page.locator('.mat-form-field-flex')).toHaveCount(3);
  await expect(page.getByPlaceholder('Enter email')).toBeVisible();
  await expect(page.getByPlaceholder('Enter password')).toHaveCount(2);
  await expect(page.getByPlaceholder('Enter password').first()).toBeVisible();
  await expect(page.getByPlaceholder('Enter password').last()).toBeVisible();
  await page.getByRole('button', { name: 'Create an account' }).isDisabled();
  await expect(page.getByRole('link', { name: 'Switch to create Business' })).toBeVisible();

  // Aditional UI elements assertions
  await expect(page.getByRole('link', { name: 'Back to Homepage' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log In' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Paydo logo' })).toBeVisible();
  await expect(page.getByText('Personal account', { exact: true })).toBeVisible();
  
  await expect(page.locator('ngp-field-requirements-item').filter({ hasText: 'Min.8 characters' })).toBeVisible();
  await expect(page.locator('ngp-field-requirements-item').filter({ hasText: 'Lowercase letter' })).toBeVisible();
  await expect(page.locator('ngp-field-requirements-item').filter({ hasText: 'Uppercase letter' })).toBeVisible();
  await expect(page.locator('ngp-field-requirements-item').filter({ hasText: 'At least 1 number' })).toBeVisible();
});



