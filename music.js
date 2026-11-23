// Explicit user gesture starts music; no autoplay or external music service.
const audio=document.createElement('audio');audio.id='gameMusic';audio.src='bgm.mp3';audio.loop=true;audio.preload='metadata';audio.hidden=true;document.body.append(audio);
const controls=document.createElement('div');controls.className='music-controls';controls.innerHTML='<button id="musicToggle" type="button" aria-pressed="false" aria-controls="gameMusic">♫ 播放配樂</button><select id="musicVolume" aria-label="配樂音量"><option value="0">靜音</option><option value="0.15">15%</option><option value="0.25" selected>25%</option><option value="0.5">50%</option><option value="1">100%</option></select>';
document.querySelector('#commandBar').prepend(controls);
const button=document.querySelector('#musicToggle'),volume=document.querySelector('#musicVolume'),key='qt-game-music-volume-v1';
let preference=.25;try{const saved=localStorage.getItem(key);if(saved!==null){const n=Number(saved);if([0,.15,.25,.5,1].includes(n))preference=n}}catch{}
audio.volume=preference;volume.value=String(preference);
const credit=document.createElement('p');credit.className='fine music-credit';credit.textContent='遊戲配樂：〈微光中的勇氣〉，masky87 製作（Suno）。點「播放配樂」後循環播放，可暫停或選擇音量。';document.querySelector('#panel').append(credit);
function remember(){try{localStorage.setItem(key,String(audio.volume))}catch{}}
function sync(){const playing=!audio.paused&&!audio.ended&&audio.volume>0;button.textContent=playing?'♫ 配樂開':'♫ 播放配樂';button.setAttribute('aria-pressed',String(playing));button.setAttribute('aria-label',playing?'暫停遊戲配樂':'播放遊戲配樂');volume.value=String(audio.volume)}
function notice(text){const el=document.querySelector('#hoverInfo');if(el)el.textContent=text}
button.onclick=async()=>{if(!audio.paused&&audio.volume>0){audio.pause();sync();notice('配樂已暫停');return}if(audio.volume===0){audio.volume=.25;remember()}button.disabled=true;button.textContent='♫ 開啟中…';let timer;try{await Promise.race([audio.play(),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('timeout')),15000)})]);notice('配樂播放中：〈微光中的勇氣〉')}catch{audio.pause();notice('配樂尚未播放，請再點一次，並確認裝置音量。')}finally{clearTimeout(timer);button.disabled=false;sync()}};
volume.onchange=()=>{audio.volume=Number(volume.value);if(audio.volume===0)audio.pause();remember();sync();notice(audio.volume===0?'配樂已靜音':`配樂音量 ${Math.round(audio.volume*100)}%`)};
for(const event of['play','pause','ended','error'])audio.addEventListener(event,sync);
audio.addEventListener('error',()=>notice('配樂載入失敗，請確認網路後重試。'));
sync();
