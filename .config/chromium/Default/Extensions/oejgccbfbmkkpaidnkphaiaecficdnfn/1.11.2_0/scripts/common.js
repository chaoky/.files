!function(t){var e={};function s(i){if(e[i])return e[i].exports;var l=e[i]={i:i,l:!1,exports:{}};return t[i].call(l.exports,l,l.exports,s),l.l=!0,l.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)s.d(i,l,function(e){return t[e]}.bind(null,l));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=8)}({3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TagAutoComplete=e.ProjectAutoComplete=void 0;var i=function(){},l=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.super=e.prototype},o=function(t,e,s){this.type=t,this.el=document.querySelector("#"+t+"-autocomplete"),this.filter=document.querySelector("#toggl-button-"+t+"-filter"),this.filterClear=this.el.parentNode.querySelector(".filter-clear"),this.placeholderItem=document.querySelector("#toggl-button-"+t+"-placeholder"),this.placeholderDiv=this.placeholderItem.querySelector("div"),this.clearSelected=this.el.querySelector("."+t+"-clear"),this.addLink=this.el.parentNode.querySelector(".add-new-"+t),this.elem=s,this.item=e,this.lastFilter="",this.listItems=[],this.exactMatch=!1,this.addEvents()};o.prototype.addEvents=function(){var t=this;t.placeholderItem.addEventListener("click",function(e){setTimeout(function(){t.filter.focus()},50)}),window.addEventListener("focus",function(e){e.target===t.filter&&t.openDropdown()},!0),t.filter.addEventListener("keydown",function(e){"Tab"===e.code&&t.closeDropdown(),"Enter"===e.code&&(t.filter.parentNode.classList.contains("open")&&t.saveSelected&&(t.saveSelected(),e.stopPropagation(),e.preventDefault()),t.closeDropdown()),"Escape"===e.code&&t.placeholderItem.parentNode.classList.contains("open")&&(t.closeDropdown(),e.stopPropagation(),e.preventDefault())}),t.filter.addEventListener("keyup",function(e){t.filterSelection()}),t.filterClear.addEventListener("click",function(e){t.closeDropdown(),e.preventDefault()})},o.prototype.clearFilters=function(){this.el.classList.remove("filtered");var t,e=this.el.querySelectorAll(".filter"),s=this.el.querySelectorAll(".tasklist-opened");for(t=0;t<e.length;t++)e[t].classList.remove("filter");for(t=0;t<s.length;t++)s[t].classList.remove("tasklist-opened")},o.prototype.openDropdown=function(){this.filter.parentNode.classList.add("open"),this.listItems=this.el.querySelectorAll(this.item),this.visibleItems=this.el.querySelectorAll("."+this.type+"-row"),this.updateHeight()},o.prototype.closeDropdown=function(t){var e=t||this;e.filter.value="",e.el.classList.remove("filtered"),e.placeholderItem.parentNode.classList.remove("open"),e.placeholderItem.parentNode.classList.remove("add-allowed"),e.clearFilters()},o.prototype.updateHeight=function(){var t,e=document.body.getBoundingClientRect(),s=this.el.getBoundingClientRect(),i="max-height:auto;",l="max-height:auto;";e.bottom>0&&s.bottom+25>=e.bottom&&((t=window.scrollY+e.bottom-s.top-10)<55&&(t=55),i="max-height: "+t+"px;",l="max-height: "+(t-25)+"px;"),this.el.style=i,"tag"===this.type&&(document.querySelector(".tag-list").style=l)};var r=function(t,e,s){o.call(this,t,e,s),this.onChangeHandler=i,this.selectedItem=-1,this.selectedTask=-1,this.visibleItems=[],this.visibleTasks=[]};e.ProjectAutoComplete=r,l(r,o),r.prototype.setup=function(t,e){this.setSelected(t,e),this.placeholderDiv.textContent=this.placeholderDiv.title=this.generateLabel(null,t,this.type,e),this.setProjectBullet(t,e)},r.prototype.addEvents=function(){var t,e=this;this.super.addEvents.call(this),e.el.addEventListener("click",function(t){t.stopPropagation(),e.selectProject(t.target)}),e.filter.addEventListener("keydown",function(s){38===s.keyCode?e.selectPrevious():40===s.keyCode?e.selectNext():37!==s.keyCode&&39!==s.keyCode||(t=e.visibleItems[e.selectedItem]).querySelector(".task-count")&&(e.clearSelectedTask(),e.toggleTaskList(t.querySelector(".task-count")))})},r.prototype.clearSelectedItem=function(){var t=this.el.querySelector(".selected-item");t&&t.classList.remove("selected-item")},r.prototype.clearSelectedTask=function(){var t=this.el.querySelector(".task-item.selected-item");t&&t.classList.remove("selected-item")},r.prototype.selectPrevious=function(){if(-1!==this.selectedItem){if(-1!==this.selectedTask&&this.visibleItems[this.selectedItem].classList.contains("tasklist-opened")&&(this.clearSelectedTask(),this.selectedTask>0))return this.selectedTask--,this.visibleTasks[this.selectedTask].classList.add("selected-item"),void this.scrollUpToView(this.el,this.visibleTasks[this.selectedTask]);this.clearSelectedItem(),this.selectedItem>0?this.selectedItem--:this.selectedItem=this.visibleItems.length-1,this.visibleItems[this.selectedItem].classList.add("selected-item"),this.selectedItem===this.visibleItems.length-1&&this.visibleItems[this.selectedItem].scrollIntoView(!1),this.scrollUpToView(this.el,this.visibleItems[this.selectedItem]),this.visibleItems[this.selectedItem].classList.contains("tasklist-opened")&&(0===this.visibleTasks.length&&(this.visibleTasks=this.visibleItems[this.selectedItem].querySelectorAll("li.task-item")),this.selectedTask=this.visibleTasks.length-1,this.visibleTasks[this.selectedTask].classList.add("selected-item"),this.scrollUpToView(this.el,this.visibleTasks[this.selectedTask]))}},r.prototype.selectNext=function(){if(-1!==this.selectedItem&&this.visibleItems[this.selectedItem].classList.contains("tasklist-opened")){if(0===this.visibleTasks.length)return this.selectedTask=0,this.visibleTasks=this.visibleItems[this.selectedItem].querySelectorAll("li.task-item"),this.visibleTasks[this.selectedTask].classList.add("selected-item"),void this.scrollDownToView(this.el,this.visibleTasks[this.selectedTask]);if(this.clearSelectedTask(),this.selectedTask<this.visibleTasks.length-1)return this.selectedTask++,this.visibleTasks[this.selectedTask].classList.add("selected-item"),void this.scrollDownToView(this.el,this.visibleTasks[this.selectedTask])}this.selectedTask=-1,this.visibleTasks=[],this.clearSelectedItem(),this.selectedItem<this.visibleItems.length-1?this.selectedItem++:this.selectedItem=0,this.visibleItems[this.selectedItem].classList.add("selected-item"),0===this.selectedItem&&this.visibleItems[this.selectedItem].scrollIntoView(),this.scrollDownToView(this.el,this.visibleItems[this.selectedItem])},r.prototype.scrollDownToView=function(t,e){t.scrollTop+t.offsetHeight<e.offsetTop+e.offsetHeight&&e.scrollIntoView(!1)},r.prototype.scrollUpToView=function(t,e){t.scrollTop>e.offsetTop&&e.scrollIntoView()},r.prototype.saveSelected=function(){this.visibleTasks[this.selectedTask]?this.selectTask(this.visibleTasks[this.selectedTask]):this.visibleItems[this.selectedItem]&&this.selectProject(this.visibleItems[this.selectedItem]),this.closeDropdown()},r.prototype.setSelected=function(t,e){var s=this.el.querySelector("li[data-tid='"+e+"']");s?this.selectTask(s,!0):this.setSelectedProject(t)},r.prototype.setSelectedProject=function(t){var e,s=this.el.querySelectorAll(".selected-"+this.type);if(s.length>=1)for(e=0;e<s.length;e++)s[e].classList.remove("selected-"+this.type);t&&this.el.querySelector("li[data-pid='"+t+"']").classList.add("selected-"+this.type)},r.prototype.selectTask=function(t,e){var s=this.el.querySelector(".selected-task");s&&s.classList.remove("selected-task"),t.classList.add("selected-task"),this.selectProject(t.parentNode.parentNode,e,!0)},r.prototype.selectProject=function(t,e,s){if(t.classList.contains("item-name")&&(t=t.parentNode),!t.classList.contains(this.type+"-row"))return t.classList.contains("task-count")&&this.toggleTaskList(t),t.classList.contains("task-item")&&this.selectTask(t),void this.onChangeHandler(this.getSelected());!s&&this.el.querySelector(".selected-task")&&this.el.querySelector(".selected-task").classList.remove("selected-task");var i=this.el.querySelector(".selected-"+this.type),l=t.getAttribute("data-pid");return i&&i.classList.remove("selected-"+this.type),t.classList.add("selected-"+this.type),this.placeholderDiv.textContent=this.placeholderDiv.title=this.generateLabel(this.getSelected(),l,this.type),this.setProjectBullet(l),e||this.closeDropdown(),this.elem.updateBillable(parseInt(l,10)),this.onChangeHandler(this.getSelected()),!1},r.prototype.toggleTaskList=function(t){var e=this.el.querySelector(".tasklist-opened");e&&e.classList.remove("tasklist-opened"),e!==t.parentNode&&t.parentNode.classList.toggle("tasklist-opened")},r.prototype.getSelected=function(){var t=this.el.querySelector(".selected-"+this.type),e=this.el.querySelector(".selected-task");return{el:t,pid:t?parseInt(t.getAttribute("data-pid"),10):0,tid:e?parseInt(e.getAttribute("data-tid"),10):null,name:t?t.getAttribute("title"):""}},r.prototype.getSelectedProjectByPid=function(t){var e=this.el.querySelector("li[data-pid='"+t+"']");return{el:e,pid:t,name:e?e.textContent:""}},r.prototype.setProjectBullet=function(t,e,s){var i,l,o,r=s||this.placeholderItem.querySelector(".tb-project-bullet");return(t||"0"===t)&&(i=this.el.querySelector("li[data-pid='"+t+"']"))?(r.className=i.querySelector(".tb-project-bullet").className,r.setAttribute("style",i.querySelector(".tb-project-bullet").getAttribute("style")),l=" - "+i.getAttribute("title"),e&&(o=i.querySelector("li[data-tid='"+e+"']"))&&(l+=" . "+o.getAttribute("title")),l):(r.className="tb-project-bullet","")},r.prototype.generateLabel=function(t,e,s,i){var l,o,r=!1,n="";return(t=this.getSelectedProjectByPid(e))||(t=this.getSelected()),t&&t.el&&(r=t.pid,(o=t.el.querySelector(".selected-task")||t.el.querySelector("li[data-tid='"+i+"']"))&&(n+=o.getAttribute("title")+" . "),(l=t.el.parentNode.querySelector(".client-row"))&&(n=l.textContent+" - "),n+=t.el.getAttribute("title")),0!==parseInt(e,10)&&r?n:"Add "+s},r.prototype.filterSelection=function(){var t,e,s,i=this.filter.value.toLowerCase();if(this.updateHeight(),i!==this.lastFilter)if(i.length>0&&!this.el.classList.contains("filtered")&&this.el.classList.add("filtered"),0!==i.length){for(t in this.visibleItems=[this.el.querySelector("p."+this.type+"-row")],this.lastFilter=i,this.exactMatch=!1,this.listItems)this.listItems.hasOwnProperty(t)&&(-1!==(s=(e=this.listItems[t]).getAttribute("title").toLowerCase()).indexOf(i)?(s===i&&(this.exactMatch=i),this.visibleItems.push(e),e.classList.add("filter"),e.classList.contains("project-row")&&(e.parentNode.classList.add("filter"),e.parentNode.parentNode.classList.add("filter")),e.classList.contains("client-row")&&e.parentNode.classList.add("filter-match"),e.classList.contains("task-item")&&(e.parentNode.parentNode.classList.add("filter"),e.parentNode.parentNode.classList.add("tasklist-opened"),e.classList.add("filter"))):e.classList&&(e.classList.remove("filter"),e.classList.contains("task-item")?(e.classList.remove("filter"),0===e.parentNode.querySelectorAll(".filter").length&&e.parentNode.parentNode.classList.remove("tasklist-opened")):(0===e.parentNode.querySelectorAll(".filter").length&&e.parentNode.classList.remove("filter"),0===e.parentNode.parentNode.querySelectorAll(".filter").length&&e.parentNode.parentNode.classList.remove("filter"),e.classList.contains("client-row")&&(e.classList.remove("filter-match"),e.parentNode.classList.remove("filter-match"),e.parentNode.parentNode.classList.remove("filter-match")))));this.updateHeight()}else this.clearFilters()},r.prototype.closeDropdown=function(){this.super.closeDropdown(this,this),this.clearSelectedItem(),this.selectedItem=-1},r.prototype.onChange=function(t){this.onChangeHandler=t},r.prototype.removeChangeHandler=function(){this.onChangeHandler=i};var n=function(t,e,s){o.call(this,t,e,s),this.wid=null};e.TagAutoComplete=n,l(n,o),n.prototype.setup=function(t,e){this.setSelected(t),this.setWorkspaceId(e)},n.prototype.addEvents=function(){var t=this;this.super.addEvents.call(this),this.el.addEventListener("click",function(e){e.stopPropagation(),t.selectTag(e)}),this.clearSelected.addEventListener("click",function(e){t.clearSelectedTags()}),t.addLink.addEventListener("click",function(e){t.addNew()})},n.prototype.closeDropdown=function(){this.super.closeDropdown(this,this),this.updatePlaceholder()},n.prototype.selectTag=function(t){t.target.classList.toggle("selected-tag")},n.prototype.setSelected=function(t){var e,s;if(this.clearSelectedTags(),t)for(e=0;e<t.length;e+=1)(s=this.el.querySelector("li[title='"+t[e]+"']"))?s.classList.add("selected-"+this.type):this.addNew(t[e]);this.updatePlaceholder(t)},n.prototype.setWorkspaceId=function(t){this.wid=t;var e,s,i=this.el.querySelectorAll(this.item),l=t.toString();for(s in i)i.hasOwnProperty(s)&&((e=i[s]).dataset.wid===l||"nowid"===l?e.classList.remove("workspace-filter"):e.classList.add("workspace-filter"))},n.prototype.clearSelectedTags=function(t){var e,s=this.el.querySelectorAll(".tag-list li.selected-tag");for(e=0;e<s.length;e+=1)s[e].classList.remove("selected-tag")},n.prototype.updatePlaceholder=function(t){t||(t=this.getSelected()),t=t&&t.length?t.join(","):"Add tags",this.placeholderDiv.textContent=this.placeholderDiv.title=t},n.prototype.getSelected=function(){var t,e,s=[],i=this.el.querySelectorAll(".tag-list .selected-tag");for(e=0;e<i.length;e+=1)t=i[e].textContent,s.push(t);return s},n.prototype.filterSelection=function(){var t,e,s,i=this.filter.value.toLowerCase();if(i!==this.lastFilter)if(i.length>0&&!this.el.classList.contains("filtered")&&this.el.classList.add("filtered"),0!==i.length){for(t in this.lastFilter=i,this.exactMatch=!1,this.listItems)this.listItems.hasOwnProperty(t)&&(-1!==(s=(e=this.listItems[t]).getAttribute("title").toLowerCase()).indexOf(i)?(s===i&&(this.exactMatch=i),e.classList.add("filter")):e.classList&&e.classList.remove("filter"));this.updateAddLink()}else this.clearFilters()},n.prototype.updateAddLink=function(t){this.addLink&&(this.exactMatch?this.placeholderItem.parentNode.classList.remove("add-allowed"):this.placeholderItem.parentNode.classList.add("add-allowed"))},n.prototype.addNew=function(t){var e=t||this.filter.value,s=this.el.querySelector("."+this.type+"-list"),i=document.createElement("li");i.className=this.type+"-item selected-"+this.type,i.setAttribute("title",e),i.textContent=e,s.insertBefore(i,s.querySelector("li:first-child")),this.filter.value="",this.filterSelection()}},8:function(t,e,s){"use strict";var i,l,o=s(3);function r(t){return t instanceof Function?t():t}function n(t){t.focus(),t.setSelectionRange(0,0),t.scrollLeft=0}window.$=((t,e)=>(e=e||document).querySelector(t)),window.createTag=((t,e,s)=>{var i=document.createElement(t);return i.className=e,s&&(i.textContent=s),i}),window.togglbutton={$billable:null,isStarted:!1,element:null,links:[],serviceName:"",projectBlurTrigger:null,taskBlurTrigger:null,tagsVisible:!1,hasTasks:!1,entries:{},projects:{},user:{},duration_format:"",currentDescription:"",fullPageHeight:function(){var t=document.body,e=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight)}(),fullVersion:"TogglButton",render:function(t,e,s,i){chrome.runtime.sendMessage({type:"activate"},function(l){if(l.success)try{if(togglbutton.user=l.user,togglbutton.entries=l.user.time_entries,togglbutton.projects=l.user.projectMap,togglbutton.fullVersion=l.version,togglbutton.duration_format=l.user.duration_format,e.observe)new MutationObserver(function(e){var l=e.filter(function(t){return t.target.matches(i)});i&&!l.length||togglbutton.renderTo(t,s)}).observe(document,{childList:!0,subtree:!0});togglbutton.renderTo(t,s)}catch(t){chrome.runtime.sendMessage({type:"error",stack:t.stack,category:"Content"})}})},renderTo:function(t,e){var s,i,l=document.querySelectorAll(t);for(s=0,i=l.length;s<i;s+=1)l[s].classList.add("toggl");for(s=0,i=l.length;s<i;s+=1)e(l[s])},topPosition:function(t,e,s){var i=t.left-10,l=t.top+document.body.scrollTop-10;return i+e>window.innerWidth&&(i=window.innerWidth-10-e),l+s>togglbutton.fullPageHeight&&(l=window.innerHeight+document.body.scrollTop-10-s),{left:i,top:l}},calculateTrackedTime:function(){var t=0,e=togglbutton.mainDescription.toLowerCase(),s=togglbutton.findProjectIdByName(togglbutton.currentProject);return togglbutton.entries&&togglbutton.entries.forEach(function(i){i.description&&i.description.toLowerCase()===e&&i.pid===s&&(t+=i.duration)}),function(t,e){t=Math.abs(t);var s=parseInt(t%60,10),i=parseInt(t/60%60,10),l=parseInt(t/3600,10),o="";return l>0&&(o+=(l=l<10?"0"+l:l)+"h "),i=i<10?"0"+i:i,s=s<10?"0"+s:s,"improved"===e?l+":"+i+":"+s:"decimal"===e?l+"."+parseInt(100*i/60,10)+"h":o+i+"m "+s+"s"}(t,togglbutton.duration_format)},findProjectByPid:function(t){var e;for(e in togglbutton.user.projectMap)if(togglbutton.user.projectMap.hasOwnProperty(e)&&togglbutton.user.projectMap[e].id===t)return togglbutton.user.projectMap[e]},updateBillable:function(t,e){var s,i,l,o=togglbutton.user.default_wid,r=togglbutton.user.workspaces;if(0!==t){if(!(s=togglbutton.findProjectByPid(t)))return;o=s.wid}for(i=0;i<r.length;i++)if(r[i].id===o){l=r[i].premium;break}togglbutton.toggleBillable(l),!e&&0!==t&&s.billable&&togglbutton.$billable.classList.toggle("tb-checked",!0)},toggleBillable:function(t){var e=t?"103":"-1";togglbutton.$billable.setAttribute("tabindex",e),togglbutton.$billable.classList.toggle("no-billable",!t)},setupBillable:function(t,e){togglbutton.updateBillable(e,!0),togglbutton.$billable.classList.toggle("tb-checked",t)},addEditForm:function(t){if(togglbutton.hasTasks=t.hasTasks,null!==t&&t.showPostPopup){var e,s,r,c,a,d,u,p=t.entry.pid,h=t.entry.tid,g=document.createElement("div");if(a=togglbutton.element.getBoundingClientRect(),d=$("#toggl-button-edit-form"),r=togglbutton.topPosition(a,240,350),null!==d)return(u=$("#toggl-button-description")).value=t.entry.description||"",i.setup(p,h),l.setup(t.entry.tags,t.entry.wid),togglbutton.setupBillable(!!t.entry.billable,p),d.style.left=r.left+"px",d.style.top=r.top+"px",d.style.display="block",void n(u);g.innerHTML=t.html.replace("{service}",togglbutton.serviceName),(d=g.firstChild).style.left=r.left+"px",d.style.top=r.top+"px",d.classList.add("toggl-integration"),document.body.appendChild(d),togglbutton.$billable=$(".tb-billable",d),i=new o.ProjectAutoComplete("project","li",togglbutton),l=new o.TagAutoComplete("tag","li",togglbutton),s=function(){i.closeDropdown(),l.closeDropdown(),d.style.display="none"},e=function(t){/toggl-button/.test(t.target.className)||/toggl-button/.test(t.target.parentElement.className)||(s(),this.removeEventListener("click",e))},c=function(t){var e=i.getSelected(),o=!!document.querySelector(".tb-billable.tb-checked:not(.no-billable)"),r={type:"update",description:$("#toggl-button-description").value,pid:e.pid,projectName:e.name,tags:l.getSelected(),tid:e.tid,billable:o,service:togglbutton.serviceName};chrome.runtime.sendMessage(r),s()},(u=$("#toggl-button-description",d)).value=t.entry.description||"",n(u),i.setup(p,h),l.setSelected(t.entry.tags),l.setWorkspaceId(t.entry.wid),togglbutton.setupBillable(!!t.entry.billable,p),$("#toggl-button-hide",d).addEventListener("click",function(t){s()}),$("#toggl-button-update",d).addEventListener("click",function(t){c()}),$("#toggl-button-update").addEventListener("keydown",function(t){"Enter"!==t.code&&"Space"!==t.code||c()}),$("form",d).addEventListener("submit",function(t){c(),t.preventDefault()}),$(".toggl-button",d).addEventListener("click",function(t){var e;return t.preventDefault(),(e=togglbutton.element).classList.remove("active"),e.style.color="",e.classList.contains("min")||(e.textContent="Start timer"),chrome.runtime.sendMessage({type:"stop",respond:!0},togglbutton.addEditForm),s(),!1}),togglbutton.$billable.addEventListener("click",function(){this.classList.toggle("tb-checked")}),togglbutton.$billable.addEventListener("keydown",function(t){var e=!1;"Space"===t.code&&(e=!0,this.classList.toggle("tb-checked")),"ArrowLeft"===t.code&&(e=!0,this.classList.toggle("tb-checked",!1)),"ArrowRight"===t.code&&(e=!0,this.classList.toggle("tb-checked",!0)),e&&(t.stopPropagation(),t.preventDefault())}),i.onChange(function(e){var s=togglbutton.findProjectByPid(e.pid),i=s?s.wid:t.entry.wid;l.setWorkspaceId(i)}),document.addEventListener("click",e)}},createTimerLink:function(t){var e=function(t,e,s){var i;return e=e||"a",s=s||"#",i=createTag(e,t),"a"===e&&(i.href=s),i.appendChild(document.createTextNode("Start timer")),i}("toggl-button");function s(){e.classList.remove("active"),e.style.color="","minimal"!==t.buttonType&&(e.textContent="Start timer")}function i(){var i=e;document.querySelector(".toggl-button.active")&&(e=document.querySelector(".toggl-button.active"),s(),e=i),e.classList.add("active"),e.style.color="#1ab351","minimal"!==t.buttonType&&(e.textContent="Stop timer")}return togglbutton.currentDescription=r(t.description),togglbutton.currentProject=t.projectName,e.title=r(togglbutton.currentDescription)+(r(togglbutton.currentProject)?" - "+r(togglbutton.currentProject):""),t.calculateTotal&&(togglbutton.mainDescription=r(t.description)),e.classList.add(t.className),togglbutton.serviceName=t.className,"minimal"===t.buttonType&&(e.classList.add("min"),e.removeChild(e.firstChild),e.title="Start timer: "+e.title),e.addEventListener("click",function(l){var o;return l.preventDefault(),l.stopPropagation(),(e=l.target).classList.contains("active")?(s(),o={type:"stop",respond:!0,service:togglbutton.serviceName}):(i(),o={type:"timeEntry",respond:!0,projectId:r(t.projectId),description:r(t.description),tags:r(t.tags),projectName:r(t.projectName),createdWith:togglbutton.fullVersion+"-"+togglbutton.serviceName,service:togglbutton.serviceName,url:window.location.href}),togglbutton.element=l.target,chrome.runtime.sendMessage(o,togglbutton.addEditForm),!1}),togglbutton.links.push({params:t,link:e}),chrome.runtime.sendMessage({type:"currentEntry"},function(t){var l,o;if(t.success)for(l=t.currentEntry,o=0;o<togglbutton.links.length;o++)e=togglbutton.links[o].link,r(togglbutton.links[o].params.description)===l.description?i():s()}),e},updateTimerLink:function(t){var e,s,i,l="",o="";if(!(togglbutton.links.length<1))for(s=0;s<togglbutton.links.length;s++)i=(e=togglbutton.links[s].link).classList.contains("min"),t&&r(togglbutton.links[s].params.description)===t.description?(e.classList.add("active"),o="#1ab351",i||(l="Stop timer")):(e.classList.remove("active"),i||(l="Start timer")),e.style.color=o,e.textContent=l},updateTrackedTimerLink:function(){var t,e,s,i=$(".toggl-tracked");i&&(t=togglbutton.calculateTrackedTime(),(e=document.createElement("h3")).textContent="Time tracked",(s=document.createElement("p")).setAttribute("title","Time tracked with Toggl: "+t),s.textContent=t,i.appendChild(e),i.appendChild(s))},findProjectIdByName:function(t){var e;for(e in togglbutton.projects)if(togglbutton.projects.hasOwnProperty(e)&&togglbutton.projects[e].name===t)return togglbutton.projects[e].id},newMessage:function(t,e,s){"stop-entry"===t.type?(togglbutton.updateTimerLink(),togglbutton.entries=t.user.time_entries,togglbutton.projects=t.user.projectMap,togglbutton.updateTrackedTimerLink()):"sync"===t.type&&null!==$("#toggl-button-edit-form")&&$("#toggl-button-edit-form").remove()}},chrome.runtime.onMessage.addListener(togglbutton.newMessage),window.addEventListener("focus",function(t){chrome.runtime.sendMessage({type:"currentEntry"},function(t){togglbutton.updateTimerLink(t.currentEntry)})})}});