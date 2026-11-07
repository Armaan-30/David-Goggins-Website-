'use client';
import { useEffect, useRef, type RefObject } from 'react';
import { useReducedMotion } from 'motion/react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createLiquidWake } from './liquid-wake';
function AthletePortrait() { return <svg className="portrait-svg" viewBox="300 225 460 1020" role="img" aria-label="David Goggins running the 2007 Badwater Ultramarathon"><defs><clipPath id="runner"><path d="M486 262 Q523 226 557 256 L568 276 571 308 563 339 559 360 576 384 608 396 648 425 671 470 692 519 715 569 717 599 702 632 679 655 651 657 639 639 643 620 668 610 666 578 645 551 635 525 630 573 623 608 629 650 624 675 637 704 628 744 614 784 609 837 586 879 580 927 573 971 589 1026 580 1077 577 1112 581 1150 591 1192 585 1225 572 1238 538 1238 528 1228 539 1194 542 1152 540 1113 526 1080 518 1046 490 1035 487 1071 474 1109 455 1139 439 1141 426 1120 422 1086 426 1049 439 1017 445 991 439 950 420 894 410 850 404 804 399 761 402 724 417 693 424 662 405 644 386 627 362 603 347 579 349 548 361 512 376 474 395 435 418 408 450 392 479 378 487 352 483 323 479 293 Z"/></clipPath></defs><image href="/images/badwater.webp" width="1949" height="1392" clipPath="url(#runner)"/></svg>; }

export default function HeroPortrait({hero}:{hero:RefObject<HTMLElement|null>}){
 const orange=useRef<HTMLDivElement>(null);
 const canvas=useRef<HTMLCanvasElement>(null);const reduced=useReducedMotion();
 useEffect(()=>{if(hero.current&&canvas.current)return createLiquidWake(canvas.current,hero.current,!!reduced);},[hero,reduced]);
 useEffect(()=>{
  const el=hero.current,layer=orange.current;if(!el||!layer)return;gsap.registerPlugin(ScrollTrigger);const state={progress:0};
  const tween=gsap.to(state,{progress:1,ease:'none',scrollTrigger:{id:'hero-water-reveal',trigger:el,start:'top top',end:()=>`+=${innerHeight*1.35}`,pin:true,scrub:reduced?true:.35,invalidateOnRefresh:true},onUpdate:()=>{const p=Math.min(1,state.progress/ .82);el.dataset.revealProgress=p.toFixed(3);if(reduced){layer.style.clipPath='none';layer.style.opacity=String(p);}else{let edge='';for(let i=0;i<=40;i++){const x=i*2.5,y=110-p*125+Math.sin(i*.23+p*5)*10*Math.sin(Math.PI*p);edge+=`${x}% ${y}%,`;}layer.style.clipPath=`polygon(${edge}100% 100%,0% 100%)`;}}});
  return ()=>{tween.scrollTrigger?.kill();tween.kill();el.dataset.revealProgress='0';};
 },[hero,reduced]);
 return <><div className="hero-person"><AthletePortrait/></div><div ref={orange} className="hero-orange" aria-hidden="true"><Image src="/images/badwater.webp" fill priority sizes="100vw" alt=""/><strong>THE WORK<br/>IS THE WAY.</strong></div><canvas ref={canvas} className="liquid-wake" aria-hidden="true"/><span className="cursor-reveal-hint" aria-hidden="true">MOVE TO UNCOVER</span></>;
}
