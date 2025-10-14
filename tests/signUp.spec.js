// @ts-check
const { test, expect } = require('@playwright/test');
const { Common } = require('../models/Common');
const { SignUpPage } = require('../models/SignUpPage');


test('[HP-1] Create account page elements are displayed', async ({ page }) => {
  const  common = new Common(page);
  const  signUp = new SignUpPage(page);
  
  await signUp.gotoSignUpPage();  
  await common.verifyHeader()
  
  await signUp.verifySignUpForm();
  /// Button should be inactive before data populated in fields
  await expect(signUp.create_account_button).toBeDisabled();
  
  /// Switch to Business account
  await expect(signUp.swithcToCreateBusinessAccountLink).toBeVisible();
});
