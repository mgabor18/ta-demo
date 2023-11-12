const { Given, When, Then } = require('cucumber');

Given('the user opens the Angular page', function () {
  return driver.get('https://angular.io/');
});

Then('the URL should be correct', function () {
  const URL = driver.getCurrentUrl();

  return expect(URL).to.eventually.equal('https://angular.io/');
});

Then("the page's title should be {string}", function (title) {
  const pageTitle = driver.getTitle();

  return expect(pageTitle).to.eventually.equal(title);
});

Then('the {string} is visible', function (string) {
  const selector = '#promo-0-title';
  const isTextVisible = driver.findElement(by.css(selector)).isDisplayed();

  return expect(isTextVisible).to.eventually.be.true;
});

Then('the {string} text is correct', function (text) {
  const selector = '#promo-0-title';
  const pageText = driver.findElement(by.css(selector)).getText();

  return expect(pageText).to.eventually.be.equal(text);
});

When('the user clicks the Docs button in the header', function () {
  const selector = '.nav-link[href=docs]';

  return driver.findElement(by.css(selector)).click();
});

Then('the Docs page should be opened', function () {
  const url = driver.getCurrentUrl();

  return expect(url).to.eventually.equal('https://angular.io/docs');
});

Then('the introduction text should be visible', async function () {
  const selector = 'h1#introduction-to-the-angular-docs';
  await driver.sleep(1000);
  const isTextVisible = driver.findElement(by.css(selector)).isDisplayed();

  return expect(isTextVisible).to.eventually.be.true;
});
