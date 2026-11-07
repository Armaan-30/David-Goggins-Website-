import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
await fs.mkdir('qa/reference',{recursive:true});
const browser=await chromium.launch();
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height}});
 try{
  await page.goto('https://landonorris.com/',{waitUntil:'domcontentloaded',timeout:45000});
  await page.waitForTimeout(5000);
  await page.screenshot({path:`qa/reference/${name}-initial.png`});
  const report={title:await page.title(),height:await page.evaluate(()=>document.documentElement.scrollHeight),controls:await page.locator('button').allTextContents()};
  console.log(name,JSON.stringify(report));
  for(let i=1;i<=5;i++){await page.mouse.wheel(0,height*1.5);await page.waitForTimeout(1200);await page.screenshot({path:`qa/reference/${name}-scroll-${i}.png`});}
 }catch(e){console.log(name,e.message)}
 await page.close();
}
await browser.close();
