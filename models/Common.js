// @ts-check
const { expect } = require('@playwright/test');

class Common {
  /** 
   * @param {import('playwright').Page} page
   */
  
  constructor(page) {
    this.page = page;
    this.logoAtTop = page.getByAltText('Paydo logo');
    this.backToHomeLink = page.getByRole('link', { name: 'Back to Homepage' });
    this.logInLink = page.getByRole('link', { name: 'Log In' });

    this.pageH1 = page.locator('h1');
  }
  
  async verifyPageHeader() { 
    await expect(this.logoAtTop).toBeVisible();
    await expect(this.backToHomeLink).toBeVisible();
    await expect(this.logInLink).toBeVisible();
  }

}
module.exports = { Common };