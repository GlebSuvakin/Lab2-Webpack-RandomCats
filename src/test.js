require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
describe('Lab 4: Test with Selenium Web Driver', function () {
    let driver;
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('Check IMG rndmpic1', async function() {
        await driver.get('file:///C:/Users/Глеб/Desktop/Lab2-Webpack-RandomCats/dist/index.html');
        await driver.wait(until.elementLocated(By.id('rndmpic1')), 10000);
    });
    it('Check IMG rndmpic2', async function() {
        await driver.get('file:///C:/Users/Глеб/Desktop/Lab2-Webpack-RandomCats/dist/index.html');
        await driver.wait(until.elementLocated(By.id('rndmpic2')), 10000);
    });
    it('Check IMG rndmpic3', async function() {
        await driver.get('file:///C:/Users/Глеб/Desktop/Lab2-Webpack-RandomCats/dist/index.html');
        await driver.wait(until.elementLocated(By.id('rndmpic3')), 10000);
    });
    after(() => driver && driver.quit());
})
  