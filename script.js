(function(){
var n=document.querySelector('.nav'),b=document.querySelector('.burger'),u=document.querySelector('.nav ul');
function s(){n.classList.toggle('solid',scrollY>40)}s();addEventListener('scroll',s,{passive:true});
b.addEventListener('click',function(){b.setAttribute('aria-expanded',u.classList.toggle('open'))});
var w=document.createElement('a');w.className='wa';w.href='https://wa.me/2348026663388';w.target='_blank';w.rel='noopener';w.setAttribute('aria-label','Chat on WhatsApp');
w.innerHTML='<svg viewBox="0 0 32 32" width="30" height="30" fill="#fff"><path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3zm0 2.4a10.6 10.6 0 1 1-5.6 19.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4A10.6 10.6 0 0 1 16 5.4zm-4.2 5.3c-.3 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.3s1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.9 5.9 3.4 1.3 4.1 1 4.8.9.8-.1 2.4-1 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.5-1.2c-.3-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7l-1.1-2.7c-.3-.7-.6-.6-.9-.6z"/></svg>';document.body.appendChild(w);
var q=new URLSearchParams(location.search),m=document.getElementById('message'),p=q.get('product');
if(m&&p)m.value='I would like a quote for: '+p+'.';
document.querySelectorAll('form[data-ajax]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var t=f.querySelector('.note');
fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){if(r.ok){f.reset();t.textContent='Thank you. We have received your message.'}else{t.textContent='Something went wrong. Please call +234 802 666 3388.'}t.style.display='block'}).catch(function(){t.textContent='No connection. Please call +234 802 666 3388.';t.style.display='block'})})});
var c=document.getElementById('count');
if(c){var T=new Date('2027-09-01T00:00:00+01:00');(function k(){var s=Math.floor(Math.max(0,T-new Date())/1e3),v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];
c.querySelectorAll('b').forEach(function(e,i){e.textContent=String(v[i]).padStart(2,'0')});setTimeout(k,1000)})()}
})();
