// @ts-check
const { test, expect } = require('@playwright/test');
const { Common } = require('../models/Common');
const { SignUpPage } = require('../models/SignUpPage');

test('[HP-1] Create account page elements are displayed', async ({ page }) => {
  const  common = new Common(page);
  const  signUp = new SignUpPage(page);
  
  await signUp.gotoSignUpPage();  
  await common.verifyPageHeader()  
  await expect(common.pageH1).toHaveText('Create a personal account');
  await signUp.verifySignUpForm();
  // Button should be inactive before data populated in fields
  await expect(signUp.create_account_button).toBeDisabled();
  
  // Switch to Business account
  await expect(signUp.swithcToCreateBusinessAccountLink).toBeVisible();
  
  // Verify policy text and link at footer
  await signUp.verifyPolicyFooter('By creating an account you confirm that you read and accept our', 'Terms of Use © Paydo Canada LTD', '/external/landing/terms-of-use-canada');
});


test('[HP-2] Create account page create button enabled', async ({ page }) => {
  const  common = new Common(page);
  const  signUp = new SignUpPage(page);
  
  await signUp.gotoSignUpPage();  
  await common.verifyPageHeader()  
  await expect(common.pageH1).toHaveText('Create a personal account');
  await signUp.verifySignUpForm();
  // Button should be inactive before data populated in fields
  await expect(signUp.create_account_button).toBeDisabled();
    
  // Fill mandatory form data
  await signUp.email_field.fill("andriistepura@gmail.com");
  await signUp.enterPasswodAndConfirmPassword("aertyu!@#70)D", "aertyu!@#70)D");
  
  // Verify that button became enable
  await expect(signUp.create_account_button).toBeEnabled();
});


