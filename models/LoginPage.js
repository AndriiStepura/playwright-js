// @ts-check
const { expect } = require('@playwright/test');
const { Common } = require('./Common');
const { HomePage } = require('./HomePage');

class LoginPage {
  /** 
   * @param {import('playwright').Page} page
   */  
  
  constructor(page) {    
    this.page = page;
    this.common = new Common(page);
    this.home = new HomePage(page);
    
    this.email_field = page.getByRole('textbox', { name: 'Enter email' });
    this.password_field = page.getByRole('textbox', { name: 'Enter password' });
    this.loginFormButton = page.getByRole('button', { name: 'Log in' });    
  }

  async gotoLoginPage() { 
    await this.page.goto('https://paydo.com/', { waitUntil: "domcontentloaded"});
    await expect(this.home.logInLink).toBeVisible();
    await this.home.logInLink.click();
  }

  // Login form fill and post
  async loginAsInvalidUser() { 
    // TODO wrapper helper
    await expect(this.email_field).toBeVisible();
    await expect(this.email_field).toBeEditable();
    await this.email_field.fill('sometest@email.notexisting');

    await expect(this.email_field).toBeVisible();
    await expect(this.password_field).toBeEditable();
    await this.password_field.fill('Passw0rd$!@#$%');

    await expect(this.loginFormButton).toBeVisible();
    await expect(this.loginFormButton).toBeEnabled();
    await this.loginFormButton.click();
  }

  async loginErrorDisplayedWithText(expectedErrorText) {        
    await expect(this.common.infoBlockMessage).toBeVisible();    
    // check that styled as error
    await expect(this.common.infoBlockMessage).toHaveAttribute('color','error');
    await expect(this.common.infoBlockMessage).toHaveText(expectedErrorText);
  }

}
module.exports = { LoginPage };