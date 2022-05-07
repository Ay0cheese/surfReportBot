// const { launch } = require('puppeteer')

// const { FrameManagerEmittedEvents } = require('puppeteer')
const puppeteer = require('puppeteer')
// const StealthPlugin = require('puppeteer-extra-plugin-stealth')
// puppeteer.use(StealthPlugin())



// That's it, the rest is puppeteer usage as normal 😊
// This section is gathering the data for surfline:
(async() => {
  const browser = await puppeteer.launch ({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 800, height: 600 })
  await page.goto('https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b')
  const surfReport = await page.evaluate(() => {
    const dateElement = document.querySelectorAll(".sl-chart-mobile-day__day")
    const fiveDayForcast = [document.querySelectorAll(".sl-chart-mobile-day__surf-height").innerText]
    dateElement.forEach((word) =>{
      fiveDayForcast.push(word.innerText)
    })

    return fiveDayForcast;

   console.log(surfReport)
  })
})()

//This is the google voice section:

// puppeteer.launch({ headless: false }).then(async browser => {
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
//     await page.waitForSelector('.whsOnd.zHQkBf')
//     await page.click('.VfPpkd-vQzf8d')
//     await page.goto('https://voice.google.com/u/0/messages')
//     await page.waitForSelector('.signUpLink')
//     await page.click('.signUpLink')
//     await page.goto('https://voice.google.com/u/0/messages')
//     await page.click('[id="apiproxy794f59e83560ea5d6299b7ff3b7a1d7788beabed0.1220890444"]');
    
    
    
    //await browser.close()


  // })
  












































// To Do: 
// 1: grab the data from surfline
// 2: create a text in google voice that will display the data
// 3: have it send a text 2 times a WebSocket. Sunday night and thursday morning