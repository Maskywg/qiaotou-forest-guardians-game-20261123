// Keep every operation outside the canvas, even on a short or zoomed viewport.
const viewport=document.querySelector('#mapViewport');
const commands=document.createElement('nav');commands.id='commandBar';commands.setAttribute('aria-label','探索與視角操作');
const build=document.createElement('nav');build.id='buildBar';build.setAttribute('aria-label','建設操作');
const status=document.createElement('div');status.id='statusBar';status.setAttribute('role','status');
const mobile=document.createElement('div');mobile.id='mobileBar';
commands.append(document.querySelector('.scene-top'),document.querySelector('.eco-dock'),document.querySelector('.compass'));const weather=document.createElement('div');weather.className='weather-controls';weather.innerHTML='<button id="quickRain">開始降雨</button><select id="rainPreset" aria-label="降雨強度"><option value="20">小雨 20 mm/h</option><option value="80" selected>大雨 80 mm/h</option><option value="150">豪雨 150 mm/h</option></select>';commands.prepend(weather);
build.append(document.querySelector('.toolbar'));
status.append(document.querySelector('#hoverInfo'),document.querySelector('#toast'));
const attribution=document.createElement('span');attribution.className='map-attribution';attribution.textContent='© OpenStreetMap';status.append(attribution);
mobile.append(document.querySelector('#mobilePanel'));
document.querySelector('.bottom-note').remove();viewport.append(document.querySelector('#game-ui'));
document.body.append(commands,build,status,mobile);
