// @ts-check
const { expect } = require('@playwright/test');
const { HomePage } = require('./HomePage');

class SignUpPage {
  /** 
   * @param {import('playwright').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.home = new HomePage(page);
    
    // Form elements
    this.input_fields = page.locator('.mat-form-field-flex');
    this.email_field = page.getByPlaceholder('Enter email');
    this.password_fields = page.getByPlaceholder('Enter password');
    this.enter_password_field = page.getByPlaceholder('Enter password').first();
    this.password_confirm_field = page.getByPlaceholder('Enter password').last();
    this.create_account_button = page.getByRole('button', { name: 'Create an account' });
    this.passwordRequirementsLabels = page.locator('.ngp-field-requirements-item__label');

    // Other elements
    this.swithcToCreateBusinessAccountLink = page.getByText('link', { name: 'Switch to create Business account' });

    // Policy link    
    this.policyText = page.locator('auth-footer');
    this.policyLink = page.locator('auth-footer').locator('a');
  }
  
  async gotoSignUpPage() { 
    await this.page.goto('https://paydo.com/', { waitUntil: "domcontentloaded"});
    await expect(this.home.openAccountLink).toBeVisible();
    await this.home.openAccountLink.click();
  }

  async verifySignUpForm() { 
    // Sign Up form fields asserts
    await expect(this.input_fields).toHaveCount(3);
    await expect(this.email_field).toBeVisible();
    await expect(this.email_field).toBeEditable();

    await expect(this.password_fields).toHaveCount(2);
    await expect(this.enter_password_field).toBeVisible();
    await expect(this.enter_password_field).toBeEditable();

    await expect(this.password_confirm_field).toBeVisible();
    await expect(this.password_confirm_field).toBeEditable();

    await expect(this.passwordRequirementsLabels).toHaveText([
        `Min.8 characters`,
        `Lowercase letter`,
        `Uppercase letter`,
        `At least 1 number`
    ]);    
  }

  async verifyPolicyFooter(expectedTextPrefix, expectedLinkText, expectedLinkURL) { 
    await expect(this.policyText).toBeVisible();
    await expect(this.policyText).toContainText(expectedTextPrefix+ "  " + expectedLinkText);

    await expect(this.policyLink).toBeVisible();
    await expect(this.policyLink).toHaveText(expectedLinkText);
    await expect(this.policyLink).toHaveAttribute('href', expectedLinkURL);
  }

  
  async enterPasswodAndConfirmPassword(password, passwordConfirm) { 
    await this.enter_password_field.fill(password);
    await this.password_confirm_field.fill(passwordConfirm);
  }
  
}
module.exports = { SignUpPage };