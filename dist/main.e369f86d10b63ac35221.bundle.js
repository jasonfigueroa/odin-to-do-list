(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var o=r.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"images/736eae1ff09acfe04c50..png";const r=e.p+"images/910b1f9a23741afc341e..svg",o=e.p+"images/6c03114b495d05f4380b..svg";function c(){let e=localStorage.getItem("lightMode");const t=document.querySelector("#light-mode-toggle"),c=t.querySelector("img"),a=()=>{document.body.classList.add("light-mode"),c.src=o,c.alt="dark mode",localStorage.setItem("lightMode",JSON.stringify(!0))};!0===JSON.parse(e)&&a(),t.addEventListener("click",(()=>{e=localStorage.getItem("lightMode"),!1===JSON.parse(e)?a():(document.body.classList.remove("light-mode"),c.src=r,c.alt="light mode",localStorage.setItem("lightMode",JSON.stringify(!1)))}))}class a{constructor(e={}){this.name=e.name||"",this.todos=[]}}class n{constructor(e){this.state=e}createProject(){return new a(this.state)}}class s{constructor(e){this.projectService=new n(e)}create(){const e=this.projectService.createProject(),t=JSON.parse(localStorage.getItem("projectArray"));t.push(e),localStorage.setItem("projectArray",JSON.stringify(t))}}(()=>{!function(e){const t=document.createElement("link"),r=document.getElementById("dynamic-favicon");t.id="dynamic-favicon",t.rel="shortcut icon",t.href=e,r&&document.head.removeChild(r),document.head.appendChild(t)}(t);const e=function(e){let t;try{t=window[e];const r="__storage_test__";return t.setItem(r,r),t.removeItem(r),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}("localStorage");if(!0===e){c(),null===localStorage.getItem("projectArray")&&localStorage.setItem("projectArray",JSON.stringify([]));let e=window.prompt("Create Project..."),t=Object.assign({},{name:e});new s(t).create()}else console.log(e)})()})();