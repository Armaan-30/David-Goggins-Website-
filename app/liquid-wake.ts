// Full-resolution water lens: crisp surface, refracted photo and a short contracting wake.
export function createLiquidWake(canvas:HTMLCanvasElement,hero:HTMLElement,reduced:boolean){
 const ctx=canvas.getContext('2d');if(!ctx)return ()=>{};
 const scene=document.createElement('canvas'),sc=scene.getContext('2d')!;const photo=new Image();
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 let width=1,height=1,ratio=1,ready=false,disposed=false,frame=0,lastPoint=0;
 const points:Array<{x:number;y:number;time:number}>=[];
 function resize(){width=hero.clientWidth;height=hero.clientHeight;ratio=Math.min(devicePixelRatio,1.5);canvas.width=scene.width=Math.round(width*ratio);canvas.height=scene.height=Math.round(height*ratio);ctx!.setTransform(ratio,0,0,ratio,0,0);sc.setTransform(ratio,0,0,ratio,0,0);if(!ready)return;
  sc.fillStyle='#ed642b';sc.fillRect(0,0,width,height);const scale=Math.max(width/photo.width,height/photo.height),iw=photo.width*scale,ih=photo.height*scale;
  sc.save();sc.globalCompositeOperation='multiply';sc.globalAlpha=.82;sc.filter='grayscale(1) contrast(1.15)';sc.drawImage(photo,(width-iw)*.25,(height-ih)*.5,iw,ih);sc.restore();
  const mobile=width<700,font=width*(mobile?.2:.12);sc.fillStyle='#f3eee5';sc.font=`800 ${font}px Barlow, Impact, sans-serif`;sc.textBaseline='top';sc.fillText('THE WORK',width*(mobile?.08:.46),height*(mobile?.56:.38));sc.fillText('IS THE WAY.',width*(mobile?.08:.46),height*(mobile?.56:.38)+font*.91);
 }
 function contour(vertices:Array<{x:number;y:number}>){const path=new Path2D(),n=vertices.length;if(!n)return path;path.moveTo((vertices[n-1].x+vertices[0].x)/2,(vertices[n-1].y+vertices[0].y)/2);for(let i=0;i<n;i++){const a=vertices[i],b=vertices[(i+1)%n];path.quadraticCurveTo(a.x,a.y,(a.x+b.x)/2,(a.y+b.y)/2);}path.closePath();return path;}
 function draw(time:number){frame=0;if(disposed)return;const lifetime=reduced?100:560;while(points.length&&time-points[0].time>lifetime)points.shift();ctx!.clearRect(0,0,width,height);
  if(!points.length||Number(hero.dataset.revealProgress||0)>.96){canvas.dataset.active='false';points.length=0;return;}
  const left:Array<{x:number;y:number}>=[],right:Array<{x:number;y:number}>=[];
  for(let i=0;i<points.length;i++){const p=points[i],a=points[Math.max(0,i-1)],b=points[Math.min(points.length-1,i+1)];const dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy)||1,nx=-dy/length,ny=dx/length;const age=(time-p.time)/lifetime;const taper=Math.sin(Math.PI*(i+1)/(points.length+1))**.4;const radius=(34+Math.min(length,25)*.45)*Math.max(0,1-age)**.65*taper;const wave=reduced?0:Math.sin(age*12-time*.004)*radius*.24;
   left.push({x:p.x+nx*(radius+wave),y:p.y+ny*(radius+wave)});right.push({x:p.x-nx*(radius-wave),y:p.y-ny*(radius-wave)});
  }
  const shape=contour([...left,...right.reverse()]);ctx!.save();ctx!.clip(shape);const refraction=reduced?0:Math.sin(time*.008)*2;ctx!.drawImage(scene,0,0,scene.width,scene.height,refraction,-refraction,width,height);ctx!.restore();
  ctx!.strokeStyle='rgba(255,244,222,.65)';ctx!.lineWidth=.85;ctx!.stroke(shape);canvas.dataset.active='true';frame=requestAnimationFrame(draw);
 }
 const move=(e:PointerEvent)=>{if(!ready||!fine.matches||e.pointerType!=='mouse'||(e.target as Element).closest('a,button'))return;const r=hero.getBoundingClientRect(),time=performance.now(),x=e.clientX-r.left,y=e.clientY-r.top;const previous=points[points.length-1];if(previous&&Math.hypot(x-previous.x,y-previous.y)<2)return;if(previous&&time-lastPoint<8)return;
  if(previous){const distance=Math.hypot(x-previous.x,y-previous.y),steps=Math.min(10,Math.max(1,Math.ceil(distance/12)));for(let i=1;i<=steps;i++)points.push({x:previous.x+(x-previous.x)*i/steps,y:previous.y+(y-previous.y)*i/steps,time});}else points.push({x:x-.5,y,time},{x,y,time});
  if(points.length>48)points.splice(0,points.length-48);lastPoint=time;if(!frame)frame=requestAnimationFrame(draw);
 };
 const stop=()=>{cancelAnimationFrame(frame);frame=0;points.length=0;ctx!.clearRect(0,0,width,height);canvas.dataset.active='false';};
 photo.onload=()=>{if(!disposed){ready=true;resize();}};photo.src='/images/badwater.webp';resize();const ro=new ResizeObserver(resize);ro.observe(hero);const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)stop();});io.observe(hero);
 hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',stop);window.addEventListener('blur',stop);document.fonts.ready.then(()=>{if(!disposed)resize();});
 return ()=>{disposed=true;stop();photo.onload=null;ro.disconnect();io.disconnect();hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',stop);window.removeEventListener('blur',stop);};
}
