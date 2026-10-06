(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var b=$('.burger'),u=$('.nav ul');if(b)b.addEventListener('click',function(){b.setAttribute('aria-expanded',u.classList.toggle('open'))});
var q=new URLSearchParams(location.search),m=document.getElementById('message'),p=q.get('product')||q.get('service'),it=q.get('items');
if(m&&it)m.value='I would like a quote for: '+it.split('|').join(', ')+'.';else if(m&&p)m.value='I would like a quote for: '+p+'.';
var eq=document.getElementById('equipment');if(eq&&q.get('equipment'))$$('option',eq).forEach(function(o){if(o.value===q.get('equipment'))eq.value=o.value});
$$('form[data-ajax]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var t=$('.note',f);
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){if(r.ok){f.reset();t.textContent='Thank you. We have received your message.'}else{t.textContent='Something went wrong. Please call +234 802 666 3388.'}t.style.display='block'}).catch(function(){t.textContent='No connection. Please call +234 802 666 3388.';t.style.display='block'})})});
var wa=document.getElementById('waSend');
if(wa)wa.addEventListener('click',function(){var f=wa.form;if(!f.reportValidity())return;var v=function(n){return f.elements[n].value};
var t='Repair request from '+v('name')+(v('hospital')?' ('+v('hospital')+')':'')+'.\nEquipment: '+v('equipment')+'\nFault: '+v('fault')+'\nUrgency: '+v('urgency')+'\nPhone: '+v('phone');
window.open('https://wa.me/2348026663388?text='+encodeURIComponent(t),'_blank','noopener')});
$$('[data-open]').forEach(function(el){var h=+new Intl.DateTimeFormat('en-GB',{timeZone:'Africa/Lagos',hour:'numeric',hourCycle:'h23'}).format(new Date()),o=h>=7&&h<20;el.className='open '+(o?'on':'off');el.textContent=o?'Open now. Closes 8pm':'Closed now. Opens 7am'});
var c=document.getElementById('count');
if(c){var LAUNCH=new Date('2027-09-01T00:00:00+01:00');(function k(){var s=Math.floor(Math.max(0,LAUNCH-new Date())/1e3),v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
$$('b',c).forEach(function(e,i){e.textContent=String(v[i]).padStart(2,'0')});setTimeout(k,1000)})()}
var rd=document.getElementById('redirect');if(rd){var sec=6,nb=$('b',rd),iv=setInterval(function(){sec--;nb.textContent=sec;if(sec<=0){clearInterval(iv);location.href='/'}},1000)}
var L=$('.lens'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
if(L){var man=0;function set(x,y){L.style.setProperty('--x',x+'px');L.style.setProperty('--y',y+'px')}
L.addEventListener('pointermove',function(e){man=Date.now();var r=L.getBoundingClientRect();set(e.clientX-r.left,e.clientY-r.top)});
(function a(t){if(!rm&&Date.now()-man>2500){var r=L.getBoundingClientRect();set(r.width*(.5+.3*Math.sin(t/1800)),r.height*(.5+.2*Math.cos(t/1300)))}requestAnimationFrame(a)})(0)}
var hs=$('header.hero .hgrid>div');if(hs&&!rm)addEventListener('scroll',function(){hs.style.transform='translateY('+(-Math.min(scrollY,500)*.08)+'px)'},{passive:true});
var T=$('.tl');if(T){var tp=function(){var r=T.getBoundingClientRect();T.style.setProperty('--p',Math.min(1,Math.max(0,(innerHeight*.65-r.top)/r.height))*100+'%')};tp();addEventListener('scroll',tp,{passive:true})}
var G=$('.gal');
if(G){var lb=document.getElementById('lb'),li=$('img',lb);G.addEventListener('click',function(e){var im=e.target.closest('img');if(im){li.src=im.src;li.alt=im.alt;lb.showModal()}});lb.addEventListener('click',function(){lb.close()});
$$('.f').forEach(function(x){x.addEventListener('click',function(){$$('.f').forEach(function(y){y.setAttribute('aria-pressed',y===x)});$$('figure',G).forEach(function(f){f.hidden=x.dataset.c!=='all'&&f.dataset.c!==x.dataset.c})})})}
var cn=$$('[data-count]');
if(cn.length&&'IntersectionObserver' in window&&!rm){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;io.unobserve(en.target);var el=en.target,n=+el.dataset.count,t0=null;(function f(t){t0=t0||t;var k=Math.min(1,(t-t0)/1100);el.textContent=Math.round(n*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(performance.now())})},{threshold:.6});cn.forEach(function(e){io.observe(e)})}
/* quote basket */
var Q=[];try{Q=JSON.parse(localStorage.getItem('dq')||'[]')}catch(e){}
if($('.addq')){var bar=document.createElement('div');bar.className='qbar';bar.hidden=true;bar.innerHTML='<button class="btn" type="button"></button>';document.body.appendChild(bar);
var qd=document.createElement('dialog');qd.id='qd';qd.innerHTML='<h2>Your quote list</h2><ul></ul><div class="acts"><a class="btn" id="qwa" target="_blank" rel="noopener">Send on WhatsApp</a><a class="btn ghost" id="qform">Use the form</a><button class="btn ghost" type="button" id="qclr">Clear</button><button class="btn ghost" type="button" id="qx">Close</button></div>';document.body.appendChild(qd);
var render=function(){bar.hidden=!Q.length;$('button',bar).textContent='Quote list ('+Q.length+')';var ul=$('ul',qd);ul.innerHTML='';Q.forEach(function(n,i){var l=document.createElement('li');l.innerHTML='<span></span><button type="button" aria-label="Remove">Remove</button>';$('span',l).textContent=n;$('button',l).onclick=function(){Q.splice(i,1);save();if(!Q.length)qd.close()};ul.appendChild(l)});
$('#qwa',qd).href='https://wa.me/2348026663388?text='+encodeURIComponent('Hello Digha Biomedical, I would like a quote for: '+Q.join(', ')+'.');$('#qform',qd).href='/contact?items='+encodeURIComponent(Q.join('|'))},
save=function(){try{localStorage.setItem('dq',JSON.stringify(Q))}catch(e){}render()};render();
$('button',bar).onclick=function(){qd.showModal()};$('#qx',qd).onclick=function(){qd.close()};$('#qclr',qd).onclick=function(){Q=[];save();qd.close()};
document.addEventListener('click',function(e){var a=e.target.closest('.addq');if(!a)return;if(Q.indexOf(a.dataset.name)<0)Q.push(a.dataset.name);save();a.textContent='Added';setTimeout(function(){a.textContent='Add to quote'},1200)})}
/* equipment finder */
var fd=$('.finder');
if(fd){var A,Lb={imaging:'X-ray imaging',power:'power and protection',beds:'hospital beds'},step=function(n){$$('.fq',fd).forEach(function(s){s.hidden=s.dataset.step!=n})};
$$('.fq button',fd).forEach(function(x){x.addEventListener('click',function(){var s=x.parentNode.dataset.step,r=$('.fres',fd);
if(s==='1'){A=x.dataset.v;step(2);r.hidden=true}else{step(0);var l=Lb[A],h='';
if(x.dataset.v==='buy')h='<a class="btn" href="#'+A+'">See '+l+' products</a>';else if(x.dataset.v==='repair')h='<a class="btn" href="/repair?equipment='+encodeURIComponent(A==='imaging'?'X-ray machine':A==='power'?'Power or controller unit':'Hospital bed')+'">Request a repair</a>';else h='<a class="btn" href="/contact?service='+encodeURIComponent('Refurbishment of '+l+' equipment')+'">Ask about refurbishment</a>';
r.innerHTML='<p style="margin-bottom:.8rem"><b>For '+l+':</b></p>'+h+' <button class="fq-reset btn ghost" type="button">Start again</button>';r.hidden=false;$('.fq-reset',r).onclick=function(){step(1);r.hidden=true}}})})}
})();
