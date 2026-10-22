(function(){
/* loader */
var L=document.getElementById('loader'),c=document.getElementById('lcount'),v=document.getElementById('intro'),n=5,done=false;
function enter(e){if(e)e.preventDefault();if(done)return;done=true;L.classList.add('out');document.body.classList.remove('loading');setTimeout(function(){L.remove()},1000)}
if(v){v.addEventListener('error',function(){v.classList.add('bad')});}
var iv=setInterval(function(){n--;if(n<=0){clearInterval(iv);enter()}else c.textContent=n},1000);
document.getElementById('skip').addEventListener('click',enter);
/* music */
var m=document.getElementById('music'),b1=document.getElementById('sound'),b2=document.getElementById('sound2');
function sync(on){b1.textContent=on?'🔊 מוזיקה פועלת':'🔈 להפעיל מוזיקה שקטה';b2.textContent=on?'🔊':'🔈';b1.setAttribute('aria-pressed',on);b2.setAttribute('aria-pressed',on)}
function toggle(){if(m.paused){m.volume=.5;m.play().then(function(){sync(true)}).catch(function(){})}else{m.pause();sync(false)}}
b1.addEventListener('click',toggle);b2.addEventListener('click',toggle);
})();
var qf=document.getElementById('qf');if(qf)qf.addEventListener('submit',function(e){e.preventDefault();var r=document.getElementById('qr');r.hidden=false;r.scrollIntoView({behavior:'smooth'})});

(function(){var f=document.getElementById('bitform'),m=document.getElementById('bitmsg');f.addEventListener('submit',function(e){e.preventDefault();var d=Object.fromEntries(new FormData(f));var b=f.querySelector('button[type=submit]');b.disabled=true;m.textContent='שולחים...';
fetch('/api/bit-order',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(function(r){return r.json()}).then(function(j){m.textContent=j.ok?'הערכה נשלחה למייל שלכם! בדקו גם בתיקיית הספאם.':j.error;if(!j.ok)b.disabled=false}).catch(function(){m.textContent='תקלה, נסו שוב';b.disabled=false})});})();
(function(){var end=Date.parse('2026-10-29T23:59:00+03:00'),box=document.getElementById('launch');if(!box)return;function p(n){return(n<10?'0':'')+n}function t(){var r=end-Date.now();if(r<=0){box.hidden=true;box.style.display='none';clearInterval(i);return}var s=Math.floor(r/1000);document.getElementById('cdd').textContent=Math.floor(s/86400);document.getElementById('cdh').textContent=p(Math.floor(s%86400/3600));document.getElementById('cdm').textContent=p(Math.floor(s%3600/60));document.getElementById('cds').textContent=p(s%60)}var i=setInterval(t,1000);t();})();
