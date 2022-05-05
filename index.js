const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())



// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: false }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 800, height: 600 })

  
    await page.goto('https://accounts.google.com/signin/v2/identifier')
    await page.type('[type="email"]', "wadegoodman95@gmail.com")
    
    await page.click('#identifierNext')
    await page.waitForTimeout(1500)
    await page.type('[type="password"]', "Cheeseandbananas")
    await page.waitForTimeout(1500)
    await page.waitForSelector('.whsOnd.zHQkBf')
    await page.click('.VfPpkd-vQzf8d')
    await page.waitForSelector('.whsOnd.zHQkBf')
    await page.click('.VfPpkd-vQzf8d')
    await page.goto('https://voice.google.com/u/0/messages')
    await page.waitForSelector('.signUpLink')
    await page.click('.signUpLink')
    await page.goto('https://voice.google.com/u/0/messages')
    await page.click('[id="apiproxy794f59e83560ea5d6299b7ff3b7a1d7788beabed0.1220890444"]');
    
    
    
    //await browser.close()


  })
  