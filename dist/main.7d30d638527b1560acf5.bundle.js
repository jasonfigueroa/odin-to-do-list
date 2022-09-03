(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/736eae1ff09acfe04c50..png";const n=e.p+"images/910b1f9a23741afc341e..svg",o=e.p+"images/6c03114b495d05f4380b..svg";function r(){var e=localStorage.getItem("lightMode"),t=document.querySelector("#light-mode-toggle"),r=t.querySelector("img"),c=function(){document.body.classList.add("light-mode"),r.src=o,r.alt="dark mode",localStorage.setItem("lightMode",JSON.stringify(!0))};!0===JSON.parse(e)&&c(),t.addEventListener("click",(function(){e=localStorage.getItem("lightMode"),!1===JSON.parse(e)?c():(document.body.classList.remove("light-mode"),r.src=n,r.alt="light mode",localStorage.setItem("lightMode",JSON.stringify(!1)))}))}var c=Object.freeze({PROJECT_CREATED:"ProjectCreated",PROJECT_ADDED:"projectAdded"}),i=function(){var e={};return{on:function(t,n){e[t]=e[t]||[],e[t].push(n)},off:function(t,n){if(e[t])for(var o=0;o<e[t].length;o++)if(e[t][o]===n){e[t].splice(o,1);break}},emit:function(t,n){e[t]&&e[t].forEach((function(e){e(n)}))}}}();const a=(d=[],{addProject:function(e){d.push(e)}});var d;const l=function(){var e=[],t=function(e){e.querySelector("i").addEventListener("click",(function(t){t.stopPropagation(),e.querySelector(".item__actions").classList.toggle("display-flex")})),window.addEventListener("click",(function(){e.querySelector(".item__actions").classList.remove("display-flex")}));var t=e.querySelector(".item__actions").children;Array.from(t).forEach((function(e){var t=e.classList;t.contains("btn-edit")&&e.addEventListener("click",(function(e){var t=e.target.parentNode.parentNode.querySelector(".item__content");t.disabled=!1,t.focus()})),t.contains("btn-delete")&&console.log(e)}))};return{addProject:function(t){return e.push(t)},renderAddProject:function(){var n=document.querySelector(".nav__list"),o=document.createElement("li");o.setAttribute("class","nav__item"),o.innerHTML='\n      <input\n        class="item__content"\n        type="text"\n        name="projectName"\n        placeholder="'.concat(e.at(-1).name,'"\n        disabled\n        />\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      <div class="item__actions">\n        <button type="button" class="btn btn-edit">edit</button>\n        <button type="button" class="btn btn-delete">delete</button>\n      </div>\n    '),n.appendChild(o),t(o)}}}(),s=function(){i.on(c.PROJECT_ADDED,a.addProject),i.on(c.PROJECT_ADDED,l.addProject),i.on(c.PROJECT_ADDED,l.renderAddProject);return{add:function(e){i.emit(c.PROJECT_ADDED,e)}}}();var u,f,m;u=t,f=document.createElement("link"),m=document.getElementById("dynamic-favicon"),f.id="dynamic-favicon",f.rel="shortcut icon",f.href=u,m&&document.head.removeChild(m),document.head.appendChild(f),r(),i.on(c.PROJECT_CREATED,s.add),function(){var e=document.getElementById("project-name");function t(){if(""!==e.value){var t={name:e.value,todos:[],setName:function(e){return e}};i.emit(c.PROJECT_CREATED,t),e.value=""}}e.addEventListener("blur",(function(e){e.preventDefault(),t()})),e.addEventListener("keypress",(function(e){"Enter"===e.key&&(e.preventDefault(),t())}))}()})();