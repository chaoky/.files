var ht0={};chrome.storage.local.get(null,function(c){ht0.c=c;ht0.oi();});ht0.cs=function(){chrome.storage.local.set(ht0.c,function(){console.debug("config saved!",ht0.c);});};chrome.storage.onChanged.addListener(function(c,n){chrome.storage.local.get(null,function(c){ht0.c=c;ht0.ou();});});ht0.oi=function(){var di=document.getElementById.bind(document);ht0.de={cpsb:di("cpsb"),cpsp:di("cpsp"),cpsn:di("cpsn"),cs:di("cs"),ctif:di("ctif"),ctil:di("ctil"),ctic:di("ctic")};if(ht0.c.iu){var n=di("iu");if(n)n.style="display: block;";ht0.c.iu=false;ht0.cs();};var fcps=function(){ht0.c.cps=ht0.de.cpsp.checked;ht0.de.cpsn.disabled=!ht0.c.cps;ht0.cs();};ht0.de.cpsb.onchange=fcps;ht0.de.cpsp.onchange=fcps;ht0.de.cpsn.onchange=function(){ht0.c.cpsn=this.checked;ht0.cs();};ht0.de.cs.onchange=function(){ht0.c.cs=this.checked;ht0.cs();};var fcti=function(){ht0.c.ati=ht0.de.ctif.checked?0:ht0.de.ctic.checked?1:-1;ht0.cs();};ht0.de.ctif.onchange=fcti;ht0.de.ctil.onchange=fcti;ht0.de.ctic.onchange=fcti;di("clks").onclick=function(){chrome.tabs.create({url:"chrome://extensions/shortcuts",active:true});};ht0.ou();};ht0.ou=function(){(ht0.c.cps?ht0.de.cpsp:ht0.de.cpsb).checked=true;ht0.de.cpsn.checked=ht0.c.cpsn;ht0.de.cpsn.disabled=!ht0.c.cps;ht0.de.cs.checked=ht0.c.cs;(!ht0.c.ati?ht0.de.ctif:ht0.c.ati==-1?ht0.de.ctil:ht0.de.ctic).checked=true;};