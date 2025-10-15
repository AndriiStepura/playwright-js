// @ts-check
const { test, expect } = require('@playwright/test');
const { Common } = require('../models/Common');
const { LoginPage } = require('../models/LoginPage');

test('[ERR-1] Verify login form errors', async ({ page }) => {  
  const login = new LoginPage(page);  
  // Arrange
  await login.gotoLoginPage();
  // Act
  await login.loginAsInvalidUser();
  // Assert
  await login.loginErrorDisplayedWithText("The email address or password you entered is incorrect");  
});
