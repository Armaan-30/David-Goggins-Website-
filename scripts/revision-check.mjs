import {chromium,expect} from '@playwright/test';
const browser=await chromium.launch();const errors=[];
for(const [name,width,height] of [['desktop',1440,900],['mobile',390,844]]){
const p=await browser.newPage({viewport:{width,height}});p.on('pageerror',e=>errors.push(e.message));await p.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});await p.waitForTimeout(1800);
await expect(p.getByRole('slider')).toHaveCount(0);await p.screenshot({path:`qa/${name}-restored-home.png`});
await expect(p.locator('.hero-reveal-toggle')).toHaveCount(0);
const top=await p.locator('#journey').evaluate(e=>e.parentElement.getBoundingClientRect().top+scrollY-85);
for(const i of [0,2,5,1]){await p.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),top+height*3.5*i/5);await p.waitForTimeout(1100);await expect(p.locator('.timeline [aria-selected=true]')).toHaveText(['2001','2007','2013','2018','2020','2022'][i]);const x=await p.locator(`#milestone-${i}`).evaluate(e=>e.getBoundingClientRect().left);if(Math.abs(x-width*.05)>5)throw Error(`slide misplaced ${name}: ${x}`);}
await p.getByRole('tab',{name:'2022'}).click();await p.waitForTimeout(1600);await expect(p.locator('#milestone-5 img')).toHaveAttribute('src',/never-finished-cover/);await p.screenshot({path:`qa/${name}-sliding-journey.png`});
await p.locator('#books').scrollIntoViewIfNeeded();await p.waitForTimeout(800);await p.screenshot({path:`qa/${name}-real-books.png`});for(const img of await p.locator('.book-cover img').all()){if(!await img.evaluate(e=>e.complete&&e.naturalWidth>0))throw Error('Book failed');}
if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('overflow');await p.close();}
const r=await browser.newPage({reducedMotion:'reduce'});await r.goto('http://127.0.0.1:3000',{waitUntil:'networkidle'});await r.getByRole('tab',{name:'2022'}).click();await expect(r.locator('#milestone-5')).toHaveAttribute('aria-hidden','false');await browser.close();if(errors.length)throw Error(errors.join('\n'));console.log('PASS restored reveal, no slider, horizontal journey, year controls, actual covers, responsive overflow, reduced motion');
