// @ts-check
const { expect } = require('@playwright/test');

class SignUpPage {
  /** 
   * @param {import('playwright').Page} page
   */
  
  constructor(page) {
    this.page = page;
    // Elements from homepage TODO move to own class for DRY
    this.openAccountLink = page.locator('.banner-section__actions').locator('a', {hasText: 'Open account'});    
    // Element from common TODO move to own class for DRY
    this.logInLink = page.getByRole('link', { name: 'Log In' });
    this.logoAtTop = page.getByAltText('Paydo logo');

    // Form elements
    this.createAPersonalAccountHeader = page.locator('h1', { hasText: 'Create a personal account' });
    this.input_fields = page.locator('.mat-form-field-flex');
    this.email_field = page.getByPlaceholder('Enter email');
    this.password_fields = page.getByPlaceholder('Enter password');
    this.enter_password_field = page.getByPlaceholder('Enter password').first();
    this.password_confirm_field = page.getByPlaceholder('Enter password').last();
    this.create_account_button = page.getByRole('button', { name: 'Create an account' });
    this.passwordRequirementsLabels = page.locator('.ngp-field-requirements-item__label');

    // Other elements
    this.swithcToCreateBusinessAccountLink = page.getByRole('link', { name: 'Switch to create Business account' });
    this.backToHomeLink = page.getByRole('link', { name: 'Back to Homepage' });

    // Policy link
    // TODO currently issue with policy link, it's missed on this page
  }

//   async getStarted() {
//     await this.getStartedLink.first().click();
//     await expect(this.gettingStartedHeader).toBeVisible();
//   }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
  
  async gotoSignUpPage() { 
    // Webkit throw timeout for default so let's increase to 60s but it still failing so let's left it for future
    // TODO take a look why webkit is failing here
    // test.setTimeout(60000);
    // await page.goto('https://paydo.com/', { timeout: 60000 });
    await this.page.goto('https://paydo.com/');
    await expect(this.openAccountLink).toBeVisible();
    await this.openAccountLink.click();
  }

}
module.exports = { SignUpPage };