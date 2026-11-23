// Each explanation is a separate button: opening help never runs the game action.
const explanations={
 '#quickRain':['開始／停止降雨','從地圖外直接切換降雨，不讓操作擋住河流。',['選擇旁邊的小雨、大雨或豪雨。','點「開始降雨」可看到雨線、積水與河川外溢教學動畫。','點「停止降雨」恢復乾燥場景。'],'河面抬升與兩岸範圍使用教學假設，非真實淹水預測。'],
 '#rainPreset':['降雨強度','比較不同雨量下的地表逕流與河川外溢示意。',['選擇小雨 20、大雨 80 或豪雨 150 mm/h。','改選後會直接啟動降雨。','觀察河面高度、兩岸藍色範圍與地圖外狀態列。'],'滯洪地與綠廊會降低遊戲中的外溢效果；不代表真實防洪評估。'],
 '[data-map-layer]':['既有地理圖層','分開查看市鎮、舊省道、捷運與臺鐵。',['勾選顯示圖層，取消勾選暫時隱藏。','台 1 線以金色中心線標示；捷運紅線使用紅色軌道與站體。','按「回到全景」可看糖廠森林與橋頭既有市鎮的相對位置。'],'道路與車站依 OSM 座標；街廓量體與高度為示意。切換不影響遊戲分數。'],
 '#help':['玩法與資料','第一次來，先從這裡開始。',['拖曳場景旋轉，滾輪縮放；手機用雙指縮放。','先探索森林阿嬤與動物，再選道路、住宅、綠廊或滯洪地工具。','目標：至少 4 格住宅，交通、生態、防洪皆達 65，預算不為負。'],'完整公式、地理依據與示意限制都在「玩法與資料」內。'],
 '[data-tool="explore"]':['探索','看看土地上的故事與森林鄰居。',['先點「探索」，再點地標附近或動物標記。','地標會顯示土地筆記，動物會收錄進生態圖鑑。','拖曳畫面可旋轉，不會配置建設。'],'不消耗預算。'],
 '[data-tool="road"]':['道路','用連續道路提高交通連通。',['點「道路」，在可規劃土地上點一個起點。','再點一個終點，就會鋪設連續路線。','需要轉彎時分段畫；完成一段，再選下一段的起點與終點。'],'每格 8 點。路線不能穿越文化／校園保留區、水系或鐵道；若出現提示，請繞行。'],
 '[data-tool="home"]':['住宅','為居民配置生活空間。',['點「住宅」，再點地圖上的一個可用地塊。','每點一格配置一格住宅；完成任務至少需要 4 格。','觀察交通與防洪分數，再決定下一格的位置。'],'每格 30 點。配置在森林內會影響生態；保留區無法建設。'],
 '[data-tool="park"]':['綠廊','保留綠色空間，提升生態與防洪分數。',['點「綠廊」，再點要配置的可用地塊。','比較配置前後的森林生態、防洪韌性分數。','可以連續點選不同地塊，配置多格。'],'每格 12 點。這是遊戲中的綠地配置，不代表短時間即可重建成熟森林。'],
 '[data-tool="water"]':['滯洪地','留出容納雨水的空間。',['點「滯洪地」，再點一個可用地塊。','調高暴雨測試的雨量，觀察逕流指數與藍色積水示意。','可用「復原」比較配置前後的差異。'],'每格 20 點。配置會提高防洪分數；用到森林地塊也會有生態代價。'],
 '#undo':['復原','撤回最近一次配置或事件決策。',['點一次，回到上一個操作前的配置與預算。','可連續復原，最多保留最近 50 步。','灰色時代表目前沒有可復原的操作。'],'存檔另存於瀏覽器；動物觀察筆記不會跟著復原。'],
 '[data-preset="blank"]':['自己規劃','從空白配置開始。',['點選後清除本次配置與城市壓力決策。','接著自行配置道路、住宅、綠廊與滯洪地。','若是不小心切換，可按「復原」找回前一個方案。'],'會重置規劃預算與事件效果；動物圖鑑保留。'],
 '[data-preset="direct"]':['直線道路','載入一個假設道路起點，方便比較。',['點選後，原有建設會換成這個預設路線。','觀察交通、生態、防洪和剩餘預算。','再自行補住宅、改路或配置綠地；也可按復原。'],'這是遊戲假設路線，不是官方核定方案。已選的城市壓力效果會保留。'],
 '[data-preset="edge"]':['外緣繞行','試試沿外緣走的假設道路。',['點選後，地圖會載入外緣路線。','觀察道路成本與各項分數，再補足住宅等配置。','想比較上一個方案，可以使用「復原」。'],'這是遊戲假設路線，不代表已完成交通或工程評估。'],
 '#rain':['雨量調整','用不同雨量測試同一個規劃方案。',['左右拖動滑桿，選擇 20–150 mm/h 雨量。','調整會自動啟動降雨，不必再按開始。','看雨線、藍色積水、逕流指數與高逕流地塊數；越高代表壓力越大。'],'此測試是相對逕流教學，不是實際淹水深度或氣象預報。防洪韌性是配置分數，不會因調雨量而直接改變。'],
 '#storm':['暴雨測試','開始或結束降雨與積水顯示。',['點「開始暴雨測試」顯示雨線與藍色積水。','拖動上方雨量滑桿，觀察雨勢與逕流結果的差異。','再點「結束暴雨測試」，回到乾燥場景。'],'不扣預算、不更動建設。深藍表示較高相對逕流，不是實際水深。'],
 '#future':['十年後的橋頭','檢查目前方案與任務成果。',['配置後點這個按鈕，查看 2036 情境成果。','至少 4 格住宅，交通、生態、防洪皆達 65，且預算不為負，才算完成任務。','關閉成果視窗後可繼續修改。'],'十年後是遊戲情境，不是實際發展預測，也不會鎖住你的方案。'],
 '#save':['儲存方案','把目前規劃存到這個瀏覽器。',['配置完成後點「儲存方案」。','儲存包含地塊配置、城市壓力決策與雨量。','下次在相同瀏覽器與同一遊戲網址，用「讀取方案」取回。'],'目前只有一個方案存檔，會覆蓋舊存檔。換裝置、無痕模式或清除網站資料，可能無法取回。'],
 '#load':['讀取方案','取回最近一次儲存的方案。',['先確認曾在這個瀏覽器按過「儲存方案」。','點「讀取方案」，配置與事件效果會回到存檔狀態。','若讀錯了，可按「復原」回到讀取前的規劃。'],'尚未儲存時會顯示提示，不會清空目前方案。'],
 '#reset':['重來','重新規劃一座城市。',['點選後清空建設與城市壓力決策，回到 2026。','預算回復初始 600 點。','若不小心重來，可以立即按「復原」。'],'不會刪除已儲存的方案與動物觀察圖鑑。'],
 '#labelsToggle':['地標顯示','開啟或關閉場景的地名標籤。',['預設關閉浮動標記，讓地圖保持清楚。','需要地名、動物標記時，點一下切換為「地標 開」。','按「回到全景」會再次關閉標記；圖鑑的「尋找」會拉近並開啟標記。'],'不改變地圖或遊戲分數；近看角色時，部分地標會暫時隱藏。'],
 '#home':['回到全景','迷路或放太大時，回到完整場景。',['點選後恢復初始視角、縮放與場景中心。','近看阿嬤或動物後，也能用這個按鈕返回。'],'不重置你的規劃、事件決策或預算。'],
 '#top':['俯視／立體','切換看地圖的角度。',['點「俯視」從上方看土地配置。','再點「立體」回到傾斜視角。','仍可用滾輪或雙指調整遠近。'],'只改變視角，不影響方案。'],
 '#grandma':['森林阿嬤','找阿嬤聊聊，取得規劃與觀察提示。',['點選後，阿嬤會依目前規劃提供提示。','可選「走到阿嬤身邊」近看立體角色。','觀察完四種動物後，再來找阿嬤領取森林觀察員徽章。'],'卡通造型與台詞為遊戲創作，不是本人原話。'],
 '#journal':['生態圖鑑','尋找並觀察四位森林鄰居。',['打開圖鑑，點物種旁的「尋找」移動視角。','再點場景上的動物標記，才會收錄觀察筆記。','收集環頸雉、黃鸝、草鴞與螢火蟲，完成 4/4。'],'尋找草鴞或螢火蟲會切換夜間。動物位置、數量與動畫皆為遊戲示意。'],
 '#night':['日夜觀察','切換白天與夜晚，觀察不同活動。',['點「夜間觀察」進入夜景。','夜裡可以看到閃爍螢火蟲與草鴞活動動畫。','點「切回白天」回到白天。'],'不消耗預算，也不會自動收集動物圖鑑；仍要點動物標記觀察。'],
 '#civic':['城市壓力','回應開發要求、短期政治承諾與居民參與冷淡。',['打開後選一個尚未決策的事件。','先看每個選項列出的預算、分數、信任或參與變化，再做選擇。','每個事件只能套用一次；可復原，也會隨方案存檔。'],'三種事件均為虛構，不指涉特定企業、人物或居民。'],
 '#mobilePanel':['規劃工作台','手機版的預算、分數與進階操作。',['點選開啟左側工作台。','上下滑動可找到預算、情境起點、暴雨、成果和存檔。','點下方「收起工作台」返回完整遊戲畫面。'],'打開工作台不會暫停或重置規劃。'],
 '#amaLook':['走到阿嬤身邊','把鏡頭移到森林阿嬤附近。',['點選後關閉對話並拉近角色。','可拖曳換角度，或按「回到全景」返回。'],'只移動視角，不消耗預算。'],
 '#amaJournal':['打開生態圖鑑','查看觀察進度與尋找動物。',['點選後進入四物種圖鑑。','點「尋找」移動視角，再點動物標記收錄。'],'觀察筆記保存在這個瀏覽器。'],
 '#amaCivic':['聊聊城市壓力','查看待處理的城市規劃事件。',['先選事件，再比較選項的效果。','決策前確認剩餘預算與各項分數。'],'事件決策可使用「復原」撤回。'],
 '#watchActor':['近看森林鄰居','移動鏡頭，近看目前這位動物。',['點選後拉近角色並關閉觀察卡。','可拖曳旋轉，按「回到全景」返回。'],'螢火蟲會自動切換夜間觀察。'],
 '[data-find]':['尋找動物','先找位置，再留下觀察筆記。',['點選後，鏡頭會移到這種動物附近。','點場景上標有「雉／鸝／鴞／螢」的圓形標記，完成觀察。'],'「尋找」本身不會增加圖鑑進度。'],
 '[data-event]':['事件詳情','先讀情境，還不會立即作出決策。',['點選事件，閱讀事件內容與兩個選項。','每個選項下方列有完整數值效果。','選擇前仍可關閉視窗；已完成的事件只能查看。'],'真正選擇方案後才會改變預算與分數。'],
 '[data-choice]':['事件選項','這個按鈕會套用下方列出的效果。',['先讀選項的預算與指標變化。','點選後記錄決策，更新儀表板並關閉視窗。','若想反悔，可立即使用工具列「復原」。'],'每個事件僅套用一次；預算不足的選項無法執行。']
};
const helpDialog=document.createElement('aside');helpDialog.id='controlHelpDialog';helpDialog.setAttribute('aria-labelledby','controlHelpTitle');helpDialog.setAttribute('role','region');helpDialog.hidden=true;helpDialog.innerHTML='<button type="button" id="closeControlHelp" aria-label="關閉操作說明">×</button><div id="controlHelpContent"></div><button type="button" id="understood" class="primary wide">懂了，回到遊戲</button>';document.body.append(helpDialog);
let returnFocus=null;const close=()=>{helpDialog.hidden=true;document.body.classList.remove('help-open');dispatchEvent(new Event('resize'));if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true})};document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!helpDialog.hidden){e.preventDefault();e.stopPropagation();close()}},true);helpDialog.querySelector('#closeControlHelp').onclick=close;helpDialog.querySelector('#understood').onclick=close;helpDialog.addEventListener('click',e=>{if(e.target!==helpDialog)return;const r=helpDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()});
function openHelp(info){const [title,purpose,steps,note]=info;const content=helpDialog.querySelector('#controlHelpContent');content.replaceChildren();const badge=document.createElement('span');badge.className='badge';badge.textContent='ⓘ 操作小幫手';const heading=document.createElement('h2');heading.id='controlHelpTitle';heading.textContent=title;const desc=document.createElement('p');desc.textContent=purpose;const ol=document.createElement('ol');steps.forEach(text=>{const li=document.createElement('li');li.textContent=text;ol.append(li)});const foot=document.createElement('p');foot.className='control-help-note';foot.textContent=note;content.append(badge,heading,desc,ol,foot);returnFocus=document.activeElement;helpDialog.hidden=false;document.body.classList.add('help-open');document.querySelector('#panel')?.classList.remove('open');const mobile=document.querySelector('#mobilePanel');mobile?.setAttribute('aria-expanded','false');if(mobile)mobile.textContent='規劃工作台';dispatchEvent(new Event('resize'));heading.tabIndex=-1;heading.focus({preventScroll:true})}
function annotate(){Object.entries(explanations).forEach(([selector,info])=>document.querySelectorAll(selector).forEach(action=>{if(action.dataset.hasInfo)return;action.dataset.hasInfo='true';const wrap=document.createElement('span');wrap.className='control-help';if(action.id==='mobilePanel')wrap.classList.add('mobile-control-help');const infoButton=document.createElement('button');infoButton.type='button';infoButton.className='info-button';infoButton.textContent='i';infoButton.setAttribute('aria-label',info[0]+'玩法說明');infoButton.setAttribute('aria-controls','controlHelpDialog');infoButton.title=info[0]+'玩法說明';infoButton.onclick=e=>{e.preventDefault();e.stopPropagation();openHelp(info)};action.before(wrap);wrap.append(action,infoButton)}))}
annotate();new MutationObserver(records=>{if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1)))annotate()}).observe(document.body,{childList:true,subtree:true});
