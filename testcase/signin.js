const { assert, Assertion } = require('chai');
const puppeteer = require('puppeteer');


(async () => {
    const pti = require('puppeteer-to-istanbul')
    const chai = require('chai')
    const {assert} = require('chai')
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();

    await Promise.all([
        page.coverage.startJSCoverage(),
        page.coverage.startCSSCoverage()
      ]);

    await page.goto('http://localhost:3000/register');

    const name = await page.waitForXPath('/html/body/div/div/div/div[3]/input');
    await name.click();
    await name.type("chetan");
    assert.isTrue
    // console.log("enter username")

    const email = await page.waitForXPath('/html/body/div/div/div/div[5]/input');
    await email.click();
    await email.type("cchauhan50@gmail.com");

    const password = await page.waitForXPath('/html/body/div/div/div/div[7]/input');
    await password.click();
    await password.type("Chetan@123");

    const signup = await page.waitForXPath('/html/body/div/div/div/div[9]/button');
    await signup.click();
    await page.screenshot({ path: 'signup.png' });

    await page.goto('http://localhost:3000/');

    const email1 = await page.waitForXPath('/html/body/div/div/div/div[3]/input');
    await email1.click();
    await email1.type("cchauhan50@gmail.com");

    const password2 = await page.waitForXPath('/html/body/div/div/div/div[5]/input');
    await password2.click();
    await password2.type("Chetan@123");

    const signin = await page.waitForXPath('/html/body/div/div/div/div[7]/button');
    await signin.click();
    await page.screenshot({ path: 'signin.png' });

    const [jsCoverage, cssCoverage] = await Promise.all([
        page.coverage.stopJSCoverage(),
        page.coverage.stopCSSCoverage(),
      ]);
      pti.write([...jsCoverage, ...cssCoverage], { includeHostname: true , storagePath: './.nyc_output' })

    await browser.close();
})();