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

    // Form elements
    this.createAPersonalAccountHeader = page.locator('h1');
    this.input_fields = page.locator('.mat-form-field-flex');
    this.email_field = page.getByPlaceholder('Enter email');
    this.password_fields = page.getByPlaceholder('Enter password');
    this.enter_password_field = page.getByPlaceholder('Enter password').first();
    this.password_confirm_field = page.getByPlaceholder('Enter password').last();
    this.create_account_button = page.getByRole('button', { name: 'Create an account' });
    this.passwordRequirementsLabels = page.locator('.ngp-field-requirements-item__label');

    // Other elements
    this.swithcToCreateBusinessAccountLink = page.getByRole('link', { name: 'Switch to create Business account' });

    // Policy link
    // TODO currently issue with policy link, it's missed on this page
  }
  
  async gotoSignUpPage() { 
    // Webkit throw timeout for default so let's increase to 60s but it still failing so let's left it for future
    // TODO take a look why webkit is failing here
    // test.setTimeout(60000);
    // await page.goto('https://paydo.com/', { timeout: 60000 });
    await this.page.goto('https://paydo.com/');
    await expect(this.openAccountLink).toBeVisible();
    await this.openAccountLink.click();
  }

  async verifySignUpForm() { 
    // Sign Up form fields asserts
    await expect(this.input_fields).toHaveCount(3);
    await expect(this.email_field).toBeVisible();
    await expect(this.password_fields).toHaveCount(2);
    await expect(this.enter_password_field).toBeVisible();
    await expect(this.password_confirm_field).toBeVisible();
    await expect(this.passwordRequirementsLabels).toHaveText([
        `Min.8 characters`,
        `Lowercase letter`,
        `Uppercase letter`,
        `At least 1 number`
    ]);
  }

  
}
module.exports = { SignUpPage };