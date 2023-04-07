const puppeteer = require('puppeteer');
const report = require('puppeteer-report');
// const signup =  '/html/body/nav/div/div/ul[2]/li[5]/a';

(async () => {
const browser = await puppeteer.launch({
headless: false
});
const page = await browser.newPage();


await page.goto('http://localhost:3000/register');
const name= await page.waitForXPath('/html/body/div/div/div/div[3]/input');
await name.click();
await name.type("chetan");

const email = await page.waitForXPath('/html/body/div/div/div/div[5]/input');
await email.click();
await email.type("cchauhan50@gmail.com");

const password = await page.waitForXPath('/html/body/div/div/div/div[7]/input');
await password.click();
await password.type("Chetan@123");

await browser.close();
}) ();



// const puppeteer = require('puppeteer');
// const chai = require('chai');
// const {} = require('chai');
// const { describe } = require('mocha');
// describe.only("Home url testing",() => {
//     it("registration",async()=>{
//         const browser = await puppeteer.launch({
//             headless: false
//             });
//             const page = await browser.newPage();
//             await page.goto('http://localhost:3000/register');
//         });
//     });
            // const name = await page.waitForXPath('/html/body/div/div/div/div[3]/input');
            // const test1 = await name.click();
            // await name.type("chetan");
            // // assert.equal(true,false);
            // console.log("enter username")
            
        
            // const email = await page.waitForXPath('/html/body/div/div/div/div[5]/input');
            // await email.click();
            // await email.type("cchauhan50@gmail.com");
        
            // const password = await page.waitForXPath('/html/body/div/div/div/div[7]/input');
            // await password.click();
            // await password.type("Chetan@123");
        
            // const signup = await page.waitForXPath('/html/body/div/div/div/div[9]/button');
            // await signup.click();
            // await page.screenshot({ path: 'signup.png' });
//     })
// }
// )




//await page.screenshot({ path: 'facebook.png' });
//await page.waitForSelector(signup, {visible: true});
//await page.click(signup);


// await page.goto('http://localhost:4000/')


// // const register = await page.waitForXPath('/html/body/nav/div/div/ul[2]/li[5]/a');
// // await register.click();


// // signup test case 
// await page.goto('http://localhost:4000/users/signup');
// //await page.screenshot({ path: 'facebook.png' });
// //await page.waitForSelector(signup, {visible: true});
// //await page.click(signup);
// const firstname= await page.waitForXPath('/html/body/main/div/div/div/div[2]/form/div/div[1]/input');
// await firstname.click();
// await firstname.type("chetan");

// const email = await page.waitForXPath('/html/body/main/div/div/div/div[2]/form/div/div[2]/input');
// await email.click();
// await email.type("cchauhan50@gmail.com");

// const password = await page.waitForXPath('/html/body/main/div/div/div/div[2]/form/div/div[3]/input');
// await password.click();
// await password.type("Chetan@123");

// const password1 = await page.waitForXPath('/html/body/main/div/div/div/div[2]/form/div/div[4]/input');
// await password1.click();
// await password1.type("Chetan@123");

// const signup = await page.waitForXPath('/html/body/main/div/div/div/div[2]/form/button');
// await signup.click();
// await page.screenshot({ path: 'signup.png' });


// await browser.close();
// }) ();