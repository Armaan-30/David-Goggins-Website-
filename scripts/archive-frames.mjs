import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
import {pathToFileURL} from 'node:url';
import path from 'node:path';
const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1024,height:576}});
await fs.mkdir('qa/frames',{recursive:true});
await page.goto(pathToFileURL(path.join(process.env.TEMP,'goggins-interview-2018.mp4')).href);
await page.waitForFunction(()=>document.querySelector('video')?.readyState>=2);
await page.evaluate(()=>{document.body.style.margin='0';const v=document.querySelector('video');v.controls=false;v.pause();v.style.width='1024px';v.style.height='576px';});
const times=process.argv.slice(2).map(Number);
for(const seconds of times.length?times:[5,15,30,60,90,120,180,240,300,360,420,480,530]){
 await page.evaluate(time=>new Promise(resolve=>{const v=document.querySelector('video');v.addEventListener('seeked',resolve,{once:true});v.currentTime=time;}),seconds);
 await page.locator('video').screenshot({path:`qa/frames/${seconds}.png`});
}
const frames=await fs.readdir('qa/frames');
const sheet=await browser.newPage({viewport:{width:1280,height:Math.ceil(frames.length/4)*200}});
const imgs=await Promise.all(frames.map(async name=>`<div><img src="data:image/png;base64,${(await fs.readFile('qa/frames/'+name)).toString('base64')}"/><span>${name}</span></div>`));
await sheet.setContent(`<style>body{margin:0;display:grid;grid-template-columns:repeat(4,1fr);background:#111;color:white;font:16px Arial}img{width:100%}div{position:relative}span{position:absolute;bottom:5px;left:5px;background:black;padding:3px}</style>${imgs.join('')}`);
await sheet.screenshot({path:'qa/frames-sheet.png',fullPage:true});
await browser.close();
