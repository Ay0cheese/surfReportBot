
// That's it, the rest is puppeteer usage as normal 😊
// This section is gathering the data for surfline:
const puppeteer = require('puppeteer');



(async() => {
  const browser = await puppeteer.launch ({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
  await page.goto('https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b')
  await page.waitForSelector('.sl-chart-mobile-day__day')
  await page.waitForSelector('.sl-chart-mobile-day__surf-height')
  await page.waitForTimeout(1500)
  const forcasts = await page.evaluate(() => {
    const date = document.querySelectorAll('.sl-chart-mobile-day__day')
    const waves = [document.querySelectorAll('.sl-chart-mobile-day__surf-height').innerText]
    date.forEach(word => {
      waves.push(word.innerText)
    });
    return date;
  })
  console.log(forcasts)
})();
// This is the google voice section:

// const puppeteer = require('puppeteer-extra')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())
// puppeteer.launch({ headless: false }).then(async browser => {
//   console.log('Running tests..')
//     const page = await browser.newPage()
//     await page.setViewport({ width: 800, height: 600 })
//     await page.goto('https://accounts.google.com/signin/v2/identifier')
//     await page.type('[type="email"]', "wadegoodman95@gmail.com")
    
//     await page.click('#identifierNext')
//     await page.waitForTimeout(1500)
//     await page.type('[type="password"]', "Cheeseandbananas")
//     await page.waitForTimeout(1500)
//     await page.waitForSelector('.whsOnd.zHQkBf')
//     await page.click('.VfPpkd-vQzf8d')
//    await page.goto('https://voice.google.com/u/0/calls')
//    await page.waitForTimeout(1500)
//    await page.click('.signUpLink')
//    await page.waitForTimeout(2500)
//    await page.goto('https://voice.google.com/u/0/messages?itemId=draft-4C1D85F0-7B95-4B06-82B2-4527E589A1F3')
//    await page.waitForTimeout(1500)
//    await page.click('.dOUild-Od0oM.grey-700')
// Keeps crashing here. Im trying to click on the "To" so I can input a number. puppeteer is not able to find the class name.
   

   
   
    
    
    
    // await browser.close()


  // })
  












































// To Do: 
// 1: grab the data from surfline
// 2: create a text in google voice that will display the data
// 3: have it send a text 2 times a WebSocket. Sunday night and thursday morning