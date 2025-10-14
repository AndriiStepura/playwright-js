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

    // Policy link
    // TODO currently issue with policy link, it's missed on this page
  }
  
  async verifyHeader() { 
    await expect(this.logoAtTop).toBeVisible();
    await expect(this.backToHomeLink).toBeVisible();
    await expect(this.logInLink).toBeVisible();
  }

}
module.exports = { Common };