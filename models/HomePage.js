// @ts-check
const { expect } = require('@playwright/test');

class HomePage {
  /** 
   * @param {import('playwright').Page} page
   */  
  
  constructor(page) {    
    this.page = page;
    this.logInLink = page.getByRole('link', { name: 'Log In' });
    this.openAccountLink = page.locator('.banner-section__actions').locator('a', {hasText: 'Open account'});
  }

}
module.exports = { HomePage };