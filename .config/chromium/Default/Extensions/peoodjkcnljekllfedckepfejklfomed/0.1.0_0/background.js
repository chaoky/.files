var fl1={c:{},v:chrome.runtime.getManifest().version,m:new Map()};fl1.cd={v:-1,ati:1,cps:true,cpsn:true,cs:false};

chrome.tabs.onRemoved.addListener(function(t,i){fl1.m.delete(t);});

chrome.runtime.setUninstallURL("https://www.framelessapps.com/extension.html#extension");

chrome.runtime.onInstalled.addListener(function(d){if((d.reason==="install"||d.reason==="update")){console.debug("install/update",d.reason);fl1.iur=d.reason;fl1.fiu();};});fl1.fiu=function(){if(!fl1.iur||!fl1.c.v||(fl1.c.v===fl1.v))return;fl1.c.v=fl1.v;if(fl1.iur=="update")fl1.c.iu=true;

chrome.storage.local.set(fl1.c);

chrome.tabs.create({url:"https://www.framelessapps.com/extension.html#"+fl1.iur,active:true});

chrome.runtime.openOptionsPage();fl1.iur=false;};

chrome.storage.local.get(null,function(c){if(!c.v){console.debug("no config -> set defaults");

chrome.storage.local.set(fl1.cd);c=fl1.cd;};fl1.c=c;fl1.fiu();});

chrome.storage.onChanged.addListener(function(c,n){chrome.storage.local.get(null,function(c){fl1.c=c;});});

chrome.browserAction.onClicked.addListener(function(t){chrome.windows.get(t.windowId,function(w){fl1.tpw(t,null,w);});});

chrome.contextMenus.removeAll();

chrome.contextMenus.create({type:"normal",contexts:["all"],id:"toggle_popup",title:"Launch Tab as FramelessApp",onclick:function(i,t){fl1.tp(t);}});

chrome.contextMenus.create({type:"normal",contexts:["link"],id:"popup_from_url",title:"Open URL in new popup window",onclick:function(i,t){chrome.windows.get(t.windowId,function(w){fl1.tpw(null,i.linkUrl,w);});}});

chrome.commands.onCommand.addListener(function(c){if(c==="toggle_popup"){chrome.windows.getLastFocused(function(w){chrome.tabs.query({windowId:w.id,active:true},function(ts){var t=ts[0];if(w.type==="popup")fl1.tnw(t,w);else fl1.tpw(t,null,w);});});};});fl1.tp=function(t){chrome.windows.get(t.windowId,function(w){if(w.type==="popup")fl1.tnw(t,w);else fl1.tpw(t,null,w);});};fl1.tpw=function(t,u,w){var ps=(fl1.c.cps&&w)||false;var data={type:"popup"};if(t){data.tabId=t.id;fl1.m.set(t.id,w.id);}else if(u)data.url=u;if(ps&&(!fl1.c.cpsn||fl1.c.cpsn&&w.state==="normal")){data.top=w.top;data.left=w.left;data.width=w.width;data.height=w.height;};

chrome.windows.create(data,function(pw){if(fl1.c.cs&&w)

chrome.windows.update(pw.id,{state:w.state});});};fl1.tnw=function(t,wp){var tw=fl1.m.get(t.id);if(tw){chrome.windows.get(tw,function(w){if(!chrome.runtime.lastError)fl1.tnwt(t,tw);else fl1.tnwlf(t,wp);});}else fl1.tnwlf(t,wp);};fl1.tnwlf=function(t,wp){chrome.windows.getLastFocused({windowTypes:["normal"]},function(w){if(!chrome.runtime.lastError)fl1.tnwt(t,w.id);else fl1.tnwc(t,wp);});};fl1.tnwc=function(t,wp){chrome.windows.create({type:"normal",state:wp.state,tabId:t.id});};fl1.tnwt=function(t,tw){if(fl1.c.ati>0)
	
chrome.tabs.query({windowId:tw,active:true},function(ts){fl1.tnwti(t,tw,ts[0].index+1);});else fl1.tnwti(t,tw,fl1.c.ati);};fl1.tnwti=function(t,tw,i){chrome.tabs.move(t.id,{windowId:tw,index:i},function(t){if(t)

chrome.tabs.update(t.id,{active:true});

chrome.windows.update(tw,{focused:true});});fl1.m.delete(t.id);};