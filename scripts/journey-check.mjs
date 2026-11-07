import { chromium, expect } from '@playwright/test';
const browser=await chromium.launch();
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height}});
 await page.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});
 await page.waitForTimeout(1800);
 const top=await page.locator('#journey').evaluate(el=>el.parentElement.getBoundingClientRect().top+scrollY);
 for(const i of [0,1,2,3,4,5,4,2,0]){
  await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),top-85+height*3.5*i/5);
  await expect(page.locator('.timeline [aria-selected=true]')).toHaveText(['2001','2007','2013','2018','2020','2022'][i]);
  await page.waitForTimeout(500);
 }
 await page.screenshot({path:`qa/${name}-journey.png`});
 const bottom=await page.locator('#milestone-0 .text-link').evaluate(el=>el.getBoundingClientRect().bottom);
 if(bottom>height)throw new Error(`${name} clipped source link ${bottom}`);
 await page.close();
}
await browser.close();console.log('PASS automatic timeline forward/backward and viewport fit on desktop/mobile');
