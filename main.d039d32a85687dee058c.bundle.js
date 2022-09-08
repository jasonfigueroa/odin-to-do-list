(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/736eae1ff09acfe04c50..png";const n=t.p+"images/910b1f9a23741afc341e..svg",r=t.p+"images/6c03114b495d05f4380b..svg";function a(){var t=localStorage.getItem("lightMode"),e=document.querySelector("#light-mode-toggle"),a=e.querySelector("img"),o=function(){document.body.classList.add("light-mode"),a.src=r,a.alt="dark mode",localStorage.setItem("lightMode",JSON.stringify(!0))};!0===JSON.parse(t)&&o(),e.addEventListener("click",(function(){t=localStorage.getItem("lightMode"),!1===JSON.parse(t)?o():(document.body.classList.remove("light-mode"),a.src=n,a.alt="light mode",localStorage.setItem("lightMode",JSON.stringify(!1)))}))}function o(t){return null===t||null!==t.match(/^ *$/)}var i,u=new Uint8Array(16);function d(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(u)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const s=function(t){return"string"==typeof t&&c.test(t)};for(var l=[],m=0;m<256;++m)l.push((m+256).toString(16).substr(1));const f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};const h=function(t,e,n){var r=(t=t||{}).random||(t.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=r[a];return e}return f(r)};const g=function(){var t=[];console.log("projectList",t);return{addProject:function(e){t.push(e)},updateProject:function(e,n){var r=t.find((function(t){return t.id===e}));r.name=n},removeProject:function(e){var n=t.findIndex((function(t){return t.id===e}));return t.splice(n,1)},getProject:function(e){return t.find((function(t){return t.id===e}))}}}();function v(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const y=(w=function(t,e){t.querySelector("#icon-edit").addEventListener("click",(function(t){t.stopPropagation(),t.preventDefault(),document.querySelector(".modal").classList.toggle("deactivated");var n=document.querySelector(".modal-body"),r=n.querySelector(".todo"),a=n.querySelector(".details");r.classList.remove("deactivated"),a.classList.add("deactivated"),document.querySelector("#add-todo-submit").classList.add("deactivated"),document.querySelector("#edit-todo-submit").classList.remove("deactivated");var o=document.querySelectorAll(".form-action input");Array.from(o).filter((function(t){return"submit"!==t.type})).forEach((function(t){"title"===t.id&&(t.value=e.title),"notes"===t.id&&(t.value=e.notes),"date"===t.id&&(t.value=e.date)}))})),document.querySelector("#edit-todo-submit").addEventListener("click",(function(e){var n;e.stopPropagation(),e.preventDefault();var r=document.querySelector(".todo"),a=document.querySelectorAll(".form-action input"),o=Array.from(a).filter((function(t){return"submit"!==t.type})).map((function(t){return t.value}));(n=console).log.apply(n,v(o)),S.updateTodo.apply(S,[t.getAttribute("data-id")].concat(v(o))),S.updateTodoCompleted(t.getAttribute("data-id"),!1),S.updateTodoImportant(t.getAttribute("data-id"),!1),r.reset(),document.querySelector(".modal").classList.toggle("deactivated")}));var n=t.querySelectorAll(".fa-star"),r=t.querySelector(".icon__star-important"),a=t.querySelector(".icon__star-not-important");n.forEach((function(e){e.addEventListener("click",(function(e){var n=e.target.classList;n.contains("icon__star-not-important")&&(a.classList.toggle("deactivated"),r.classList.toggle("deactivated"),S.updateTodoImportant(t.getAttribute("data-id"),!0)),n.contains("icon__star-important")&&(a.classList.toggle("deactivated"),r.classList.toggle("deactivated"),S.updateTodoImportant(t.getAttribute("data-id"),!1))}))}));var o=t.querySelector(".item-status input[type=checkbox]");o.addEventListener("click",(function(e){e.stopPropagation(),!0===o.checked?(document.querySelector(".item-title").classList.add("completed"),document.querySelector(".item-date").classList.add("completed"),S.updateTodoCompleted(t.getAttribute("data-id"),o.checked)):(document.querySelector(".item-title").classList.remove("completed"),document.querySelector(".item-date").classList.remove("completed"),S.updateTodoCompleted(t.getAttribute("data-id"),o.checked))})),t.querySelector(".btn-detail").addEventListener("click",(function(t){t.stopPropagation(),T(e)}))},T=function(t){document.querySelector(".modal").classList.toggle("deactivated");var e=document.querySelector(".modal-body"),n=e.querySelector(".todo"),r=e.querySelector(".details");n.classList.add("deactivated"),r.classList.remove("deactivated"),r.innerHTML='\n      <div class="item-title">Title: '.concat(t.title,'</div>\n      <div class="item-date">Date: ').concat(t.date,'</div>\n      <div class="item-notes">Notes: ').concat(t.notes,'</div>\n      <div class="item-importance">Priority: ').concat(t.isImportant?"important":"not important",'</div>\n      <div class="item-completion">Status: ').concat(t.isCompleted?"completed":"not completed","</div>\n    ")},{renderAlltodos:function(t){var e=document.querySelector(".content__list");if(t.length>0)b(),t.forEach((function(t){var n=document.createElement("li");n.setAttribute("class","content__item"),n.innerHTML=t.title,e.appendChild(n)}));else{b();var n=document.createElement("div");n.setAttribute("class","no-todo"),n.innerHTML="no tasks yet",e.appendChild(n)}},renderTodo:function(t){var e=document.querySelector(".content__list"),n=document.createElement("li");n.setAttribute("class","content__item"),n.setAttribute("data-id",t.id),e.querySelector(".no-todo")&&b(),n.innerHTML='\n    <div class="item-status">\n      <input type="checkbox" name="isCompleted" value="false" />\n    </div>\n    <div class="item-title">'.concat(t.title,'</div>\n    <div class="item-date">').concat(t.date,'</div>\n    <div class="item-actions">\n      <button class="btn btn-detail">details</button>\n      <i class="fa-regular fa-star icon__star-not-important"></i>\n      <i class="fa-solid fa-star icon__star-important deactivated"></i>\n      <i class="fa-regular fa-pen-to-square" id="icon-edit"></i>\n      <i class="fa-solid fa-trash" id="icon-delete"></i>\n    </div>\n    '),e.appendChild(n),w(n,t)},removeAllChildNodes:b=function(){for(var t=document.querySelector(".content__list");t.firstChild;)t.removeChild(t.firstChild)},renderWhenNoProject:function(){b();var t=document.querySelector(".content__list"),e=document.createElement("div");e.setAttribute("class","no-todo"),e.innerHTML="must click to choose project first",t.appendChild(e)},renderUpdate:function(t,e){var n=document.querySelector('[data-id="'.concat(t,'"]'));n.innerHTML='\n    <div class="item-status">\n      <input type="checkbox" name="isCompleted" value="false" />\n    </div>\n    <div class="item-title">'.concat(e.title,'</div>\n    <div class="item-date">').concat(e.date,'</div>\n    <div class="item-actions">\n      <button class="btn btn-detail">details</button>\n      <i class="fa-regular fa-star icon__star-not-important"></i>\n      <i class="fa-solid fa-star icon__star-important deactivated"></i>\n      <i class="fa-regular fa-pen-to-square" id="icon-edit"></i>\n      <i class="fa-solid fa-trash" id="icon-delete"></i>\n    </div>\n    '),w(n,e)}});var b,w,T;const S=function(){var t={};return{setProject:function(e){t=e},addTodo:function(e){try{t.todos.push(e),y.renderTodo(e)}catch(t){y.renderWhenNoProject()}},getAllTodos:function(){var e=t.todos;y.renderAlltodos(e)},removeAllToDos:function(){t.todos.splice(0,t.todos.length)},updateTodoCompleted:function(e,n){t.todos.find((function(t){return t.id===e})).setIsCompleted(n)},updateTodoImportant:function(e,n){t.todos.find((function(t){return t.id===e})).setIsImportant(n)},updateTodo:function(e){var n=t.todos.find((function(t){return t.id===e}));console.log("before update",{currentTodo:n}),n.setTitle(arguments.length<=1?void 0:arguments[1]),n.setNotes(arguments.length<=2?void 0:arguments[2]),n.setDate(arguments.length<=3?void 0:arguments[3]),console.log("after update",{currentTodo:n}),y.renderUpdate(e,n)}}}(),C=(M=function(t){t.addEventListener("click",(function(e){e.stopPropagation();var n=t.querySelector(".item__content").getAttribute("data-id"),r=k.get(n);document.querySelector(".header__name").textContent=r.name,S.setProject(r),S.getAllTodos()})),t.querySelector("i").addEventListener("click",(function(e){e.stopPropagation(),t.querySelector(".item__actions").classList.toggle("display-flex")})),window.addEventListener("click",(function(){t.querySelector(".item__actions").classList.remove("display-flex")}));var e=t.querySelector(".item__actions").children;Array.from(e).forEach((function(e){var n=e.classList;n.contains("btn-edit")&&e.addEventListener("click",(function(t){t.stopPropagation();var e=t.target.parentNode.parentNode.querySelector(".item__content");function n(t){var e=t.target;!0!==o(t.target.value)&&(k.update(e.getAttribute("data-id"),e.value),e.disabled=!0)}e.disabled=!1,e.focus(),e.addEventListener("blur",(function(t){t.preventDefault(),n(t)})),e.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),n(t))}))})),n.contains("btn-delete")&&e.addEventListener("click",(function(e){e.stopPropagation();var n,r=e.target.parentNode.parentNode.querySelector(".item__content");n=r.getAttribute("data-id"),k.remove(n),t.parentNode.removeChild(t)}))}))},{render:function(t){var e=document.querySelector(".nav__list"),n=document.createElement("li");n.setAttribute("class","nav__item"),n.innerHTML='\n      <input\n        class="item__content"\n        type="text"\n        name="projectName"\n        placeholder="'.concat(t.name,'"\n        data-id = "').concat(t.id,'"\n        disabled\n        />\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      <div class="item__actions">\n        <button type="button" class="btn btn-edit">edit</button>\n        <button type="button" class="btn btn-delete">delete</button>\n      </div>\n    '),e.appendChild(n),M(n)}});var M;const k={add:function(t){g.addProject(t),C.render(t)},update:function(t,e){g.updateProject(t,e)},remove:function(t){S.removeAllToDos(),y.removeAllChildNodes(),g.removeProject(t)},get:function(t){return g.getProject(t)}};function D(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function q(t){return D(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function P(t){D(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function L(t){if(D(1,arguments),!q(t)&&"number"!=typeof t)return!1;var e=P(t);return!isNaN(Number(e))}function E(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function x(t,e){D(2,arguments);var n=P(t).getTime(),r=E(e);return new Date(n+r)}function U(t,e){D(2,arguments);var n=E(e);return x(t,-n)}var A=864e5;function _(t){D(1,arguments);var e=1,n=P(t),r=n.getUTCDay(),a=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function N(t){D(1,arguments);var e=P(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=_(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=_(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function W(t){D(1,arguments);var e=N(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=_(n);return r}var j=6048e5;var Y={};function O(){return Y}function H(t,e){var n,r,a,o,i,u,d,c;D(1,arguments);var s=O(),l=E(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=P(t),f=m.getUTCDay(),h=(f<l?7:0)+f-l;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function I(t,e){var n,r,a,o,i,u,d,c;D(1,arguments);var s=P(t),l=s.getUTCFullYear(),m=O(),f=E(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==r?r:null===(d=m.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,f),h.setUTCHours(0,0,0,0);var g=H(h,e),v=new Date(0);v.setUTCFullYear(l,0,f),v.setUTCHours(0,0,0,0);var p=H(v,e);return s.getTime()>=g.getTime()?l+1:s.getTime()>=p.getTime()?l:l-1}function F(t,e){var n,r,a,o,i,u,d,c;D(1,arguments);var s=O(),l=E(null!==(n=null!==(r=null!==(a=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),m=I(t,e),f=new Date(0);f.setUTCFullYear(m,0,l),f.setUTCHours(0,0,0,0);var h=H(f,e);return h}var z=6048e5;function R(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const B={y:function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return R("yy"===e?r%100:r,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):R(n+1,2)},d:function(t,e){return R(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return R(t.getUTCHours()%12||12,e.length)},H:function(t,e){return R(t.getUTCHours(),e.length)},m:function(t,e){return R(t.getUTCMinutes(),e.length)},s:function(t,e){return R(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,r=t.getUTCMilliseconds();return R(Math.floor(r*Math.pow(10,n-3)),e.length)}};var Q="midnight",G="noon",X="morning",J="afternoon",V="evening",$="night",K={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return B.y(t,e)},Y:function(t,e,n,r){var a=I(t,r),o=a>0?a:1-a;return"YY"===e?R(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):R(o,e.length)},R:function(t,e){return R(N(t),e.length)},u:function(t,e){return R(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return R(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return R(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return B.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return R(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){D(1,arguments);var n=P(t),r=H(n,e).getTime()-F(n,e).getTime();return Math.round(r/z)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):R(a,e.length)},I:function(t,e,n){var r=function(t){D(1,arguments);var e=P(t),n=_(e).getTime()-W(e).getTime();return Math.round(n/j)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):R(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):B.d(t,e)},D:function(t,e,n){var r=function(t){D(1,arguments);var e=P(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),a=n-r;return Math.floor(a/A)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):R(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return R(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return R(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return R(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?G:0===a?Q:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?V:a>=12?J:a>=4?X:$,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return B.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):B.H(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):R(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):B.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):B.s(t,e)},S:function(t,e){return B.S(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return tt(a);case"XXXX":case"XX":return et(a);default:return et(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return tt(a);case"xxxx":case"xx":return et(a);default:return et(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Z(a,":");default:return"GMT"+et(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Z(a,":");default:return"GMT"+et(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return R(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return R((r._originalDate||t).getTime(),e.length)}};function Z(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+R(o,2)}function tt(t,e){return t%60==0?(t>0?"-":"+")+R(Math.abs(t)/60,2):et(t,e)}function et(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+R(Math.floor(a/60),2)+n+R(a%60,2)}const nt=K;var rt=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},at=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},ot={p:at,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return rt(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",rt(a,e)).replace("{{time}}",at(o,e))}};const it=ot;function ut(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var dt=["D","DD"],ct=["YY","YYYY"];function st(t){return-1!==dt.indexOf(t)}function lt(t){return-1!==ct.indexOf(t)}function mt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var ft={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};const ht=function(t,e,n){var r,a=ft[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function gt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var vt={date:gt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:gt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:gt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var pt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function yt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function bt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],d=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(d)?Tt(d,(function(t){return t.test(u)})):wt(d,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var s=e.slice(u.length);return{value:i,rest:s}}}function wt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Tt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var St;const Ct={code:"en-US",formatDistance:ht,formatLong:vt,formatRelative:function(t,e,n,r){return pt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:yt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:yt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:yt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:yt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:yt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(St={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(St.matchPattern);if(!n)return null;var r=n[0],a=t.match(St.parsePattern);if(!a)return null;var o=St.valueCallback?St.valueCallback(a[0]):a[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(r.length);return{value:o,rest:i}}),era:bt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:bt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:bt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:bt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:bt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var Mt,kt,Dt,qt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Pt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Lt=/^'([^]*?)'?$/,Et=/''/g,xt=/[a-zA-Z]/;function Ut(t,e,n){var r,a,o,i,u,d,c,s,l,m,f,h,g,v,p,y,b,w;D(2,arguments);var T=String(e),S=O(),C=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:S.locale)&&void 0!==r?r:Ct,M=E(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==u?u:S.firstWeekContainsDate)&&void 0!==i?i:null===(l=S.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(M>=1&&M<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=E(null!==(f=null!==(h=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(p=n.locale)||void 0===p||null===(y=p.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:S.weekStartsOn)&&void 0!==h?h:null===(b=S.locale)||void 0===b||null===(w=b.options)||void 0===w?void 0:w.weekStartsOn)&&void 0!==f?f:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!C.localize)throw new RangeError("locale must contain localize property");if(!C.formatLong)throw new RangeError("locale must contain formatLong property");var q=P(t);if(!L(q))throw new RangeError("Invalid time value");var x=ut(q),A=U(q,x),_={firstWeekContainsDate:M,weekStartsOn:k,locale:C,_originalDate:q},N=T.match(Pt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,it[e])(t,C.formatLong):t})).join("").match(qt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return At(r);var o=nt[a];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!lt(r)||mt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!st(r)||mt(r,e,String(t)),o(A,r,C.localize,_);if(a.match(xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return N}function At(t){var e=t.match(Lt);return e?e[1].replace(Et,"'"):t}Mt=e,kt=document.createElement("link"),Dt=document.getElementById("dynamic-favicon"),kt.id="dynamic-favicon",kt.rel="shortcut icon",kt.href=Mt,Dt&&document.head.removeChild(Dt),document.head.appendChild(kt),a(),function(){var t=document.getElementById("project-name");function e(){if(!0!==o(t.value)){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=h(),n=[];return{get id(){return e},get name(){return t},get todos(){return n},setName:function(e){return t=e}}}(t.value);k.add(e),t.value=""}}t.addEventListener("blur",(function(t){t.preventDefault(),e()})),t.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e())}));var n=document.querySelector(".modal"),r=document.querySelector(".modal-container"),a=document.querySelector("#add-task"),i=document.querySelector(".modal-header img"),u=document.querySelector("#add-todo-submit");a.addEventListener("click",(function(){n.classList.toggle("deactivated");var t=document.querySelector(".modal-body"),e=t.querySelector(".todo"),r=t.querySelector(".details");e.classList.remove("deactivated"),r.classList.add("deactivated")})),n.addEventListener("click",(function(){n.classList.toggle("deactivated")})),i.addEventListener("click",(function(t){t.stopPropagation(),n.classList.toggle("deactivated")})),r.addEventListener("click",(function(t){t.stopPropagation()})),u.addEventListener("click",(function(t){t.preventDefault(),t.stopPropagation();var e=document.querySelector(".todo"),r=document.querySelectorAll(".form-action input"),a=Array.from(r).filter((function(t){return"submit"!==t.type})),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=h(),n=t.title||"",r=t.notes||"",a=!1,o=!1,i=t.date||Ut(new Date,"yyyy-MM-dd");return{get id(){return e},get title(){return n},get notes(){return r},get isImportant(){return o},get date(){return i},get isCompleted(){return a},setIsCompleted:function(t){a=t},setIsImportant:function(t){o=t},setTitle:function(t){n=t},setNotes:function(t){r=t},setDate:function(t){i=Ut(new Date(t),"yyyy-MM-dd")}}}({title:a[0].value,notes:a[1].value,date:a[2].value});S.addTodo(o),e.reset(),n.classList.toggle("deactivated")}))}()})();