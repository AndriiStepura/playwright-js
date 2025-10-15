// @ts-check
const { expect } = require('@playwright/test');
const { Common } = require('../models/Common');
/** @type {Common} */
let commonElements;

class LoginPage {
  /** 
   * @param {import('playwright').Page} page
   */  
  
  constructor(page) {    
    this.page = page;    
    commonElements = new Common(page);

    // Elements from homepage TODO move to own class for DRY later when page created
    this.logInLink = page.getByRole('link', { name: 'Log In' });    

    this.email_field = page.getByRole('textbox', { name: 'Enter email' });
    this.password_field = page.getByRole('textbox', { name: 'Enter password' });
    this.loginFormButton = page.getByRole('button', { name: 'Log in' });    
  }

  async gotoLoginPage() { 
    // TODO move to common
    await this.page.goto('https://paydo.com/', { waitUntil: "domcontentloaded"});
    await expect(this.logInLink).toBeVisible();
    await this.logInLink.click();
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
    await expect(commonElements.infoBlockMessage).toBeVisible();    
    // check that styled as error
    await expect(commonElements.infoBlockMessage).toHaveAttribute('color','error');
    await expect(commonElements.infoBlockMessage).toHaveText(expectedErrorText)
  }

}
module.exports = { LoginPage };