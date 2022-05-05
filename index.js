const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())



// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: false }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 800, height: 600 })

    //await page.goto('https://www.surfline.com/surf-report/the-wedge/5842041f4e65fad6a770882b')
    //await page.waitForTimeout(1000)
  
    await page.goto('https://accounts.google.com/signin/v2/identifier?service=grandcentral&passive=1209600&osid=1&continue=https%3A%2F%2Fvoice.google.com%2Fsignup&followup=https%3A%2F%2Fvoice.google.com%2Fsignup&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
    await page.waitForSelector('.Xb9hP')
    await page.click('.Xb9hP')
    await page.waitForSelector('.Xb9hP')
    await page.type('.whsOnd.zHQkBf, wadegoodman95@gmail.com')
    await browser.close()
  })
  