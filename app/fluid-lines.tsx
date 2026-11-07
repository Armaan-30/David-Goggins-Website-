 'use client';
import {useEffect,useRef} from 'react';
import {useReducedMotion} from 'motion/react';
const paths=[
'M-180 130 C80 -160 140 500 370 210 S670 -80 820 150 S1160 390 1590 20',
'M-150 280 C160 30 45 730 350 440 S650 160 870 350 S1230 550 1590 260',
'M-150 680 C180 380 260 960 510 690 S760 420 1000 670 S1320 850 1610 590',
'M-100 960 C200 620 400 1170 650 900 S1040 790 1550 970',
'M100 -170 C-110 140 540 140 300 470 S130 770 420 1060',
'M760 -130 C470 120 1040 260 800 550 S610 830 950 1110',
'M1360 -110 C1050 160 1580 360 1310 640 S1190 880 1510 1040'];
function bend(path:string,phase:number){let i=0;return path.replace(/-?\d+(?:\.\d+)?/g,value=>{const n=i++;return (Number(value)+Math.sin(n*.73+phase)*(n%2?150:95)).toFixed(2);});}
export default function FluidLines(){
 const svg=useRef<SVGSVGElement>(null);const reduced=useReducedMotion();
 useEffect(()=>{if(reduced)svg.current?.pauseAnimations();else svg.current?.unpauseAnimations();},[reduced]);
 return <svg ref={svg} className="fluid-lines" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
  {paths.map((d,i)=><path key={i} d={d}><animate attributeName="d" values={`${d};${bend(d,i+1)};${bend(d,i+3)};${d}`} dur={`${10+i*1.3}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.33;.66;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/></path>)}
  {paths.slice(0,3).map((d,i)=><path key={i} className="fluid-line-current" d={d} pathLength="1000" style={{animationDelay:`${-i*3}s`}}><animate attributeName="d" values={`${d};${bend(d,i+1)};${bend(d,i+3)};${d}`} dur={`${10+i*1.3}s`} repeatCount="indefinite" calcMode="spline" keyTimes="0;.33;.66;1" keySplines=".45 0 .55 1;.45 0 .55 1;.45 0 .55 1"/></path>)}
 </svg>;
}
