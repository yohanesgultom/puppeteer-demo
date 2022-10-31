import puppeteer from 'puppeteer';

const chromeProfilePath = 'userData';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: chromeProfilePath,
    defaultViewport: null,
    slowMo: 100,
  });
  const pages = await browser.pages();
  const page = pages[0]

  await page.goto('https://www.tiket.com/to-do/lets-love-indonesia-we-all-are-one-k-pop-concert?utm_page=toDoSearchResult');
  
  await page.waitForSelector('div[data-code="8"] .select-date-btn')
  await page.click('div[data-code="8"] .select-date-btn');
  await page.waitForSelector('div[data-code="8"] .add-btn')
  await page.click('div[data-code="8"] .add-btn');
  await page.click('div[data-code="8"] .btn-pill--book');

  await page.waitForSelector('.contact-info .booking-form .row:nth-child(1) input')
  await page.type('.contact-info .booking-form .row:nth-child(1) input', 'Jane Doe');
  await page.type('.contact-info .booking-form .row:nth-child(2) input', 'janedoe@gmail.com');
  await page.type('.contact-info .booking-form .row:nth-child(3) input', '080989999');
  await page.click('.contact-info .booking-form-select');
  await page.click('.booking-form-select-menu div:nth-child(2)');
  await page.click('.guest-info .toggle-switch');
  await page.type('.guest-info .booking-form .row:nth-child(4) input', '11111111111111111');
  await page.click('.payment-button-container .btn-pill');
  
  await page.waitForSelector('.payment-methods-list:nth-child(5) a:nth-child(3)')
  await page.waitForTimeout(3000);
  await browser.close();
})();