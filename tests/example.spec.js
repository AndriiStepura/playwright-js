// @ts-check
const { test, expect } = require('@playwright/test');
const { SignUpPage } = require('../models/SignUpPage');

test('[HP-1] Create account page elements are displayed', async ({ page }) => {
  const  signUp = new SignUpPage(page);
  await signUp.gotoSignUpPage();
  /// Top navigation
  await expect(signUp.logoAtTop).toBeVisible();
  await expect(signUp.backToHomeLink).toBeVisible();
  await expect(signUp.logInLink).toBeVisible();
  // Sign Up form fields asserts
  await expect(signUp.input_fields).toHaveCount(3);
  await expect(signUp.email_field).toBeVisible();
  await expect(signUp.password_fields).toHaveCount(2);
  await expect(signUp.enter_password_field).toBeVisible();
  await expect(signUp.password_confirm_field).toBeVisible();
  await expect(signUp.passwordRequirementsLabels).toHaveText([
    `Min.8 characters`,
    `Lowercase letter`,
    `Uppercase letter`,
    `At least 1 number`
  ]);
  /// Button should be inactive before data populated in fields
  await expect(signUp.create_account_button).toBeDisabled();
  /// Switch to Business account
  await expect(signUp.swithcToCreateBusinessAccountLink).toBeVisible();
});
