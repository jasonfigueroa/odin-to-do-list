(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/736eae1ff09acfe04c50..png";const n=t.p+"images/910b1f9a23741afc341e..svg",r=t.p+"images/6c03114b495d05f4380b..svg";function o(){var t=localStorage.getItem("lightMode"),e=document.querySelector("#light-mode-toggle"),o=e.querySelector("img"),i=function(){document.body.classList.add("light-mode"),o.src=r,o.alt="dark mode",localStorage.setItem("lightMode",JSON.stringify(!0))};!0===JSON.parse(t)&&i(),e.addEventListener("click",(function(){t=localStorage.getItem("lightMode"),!1===JSON.parse(t)?i():(document.body.classList.remove("light-mode"),o.src=n,o.alt="light mode",localStorage.setItem("lightMode",JSON.stringify(!1)))}))}function i(t){return null===t||null!==t.match(/^ *$/)}var a,c=new Uint8Array(16);function d(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(c)}const s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const u=function(t){return"string"==typeof t&&s.test(t)};for(var l=[],f=0;f<256;++f)l.push((f+256).toString(16).substr(1));const p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n};const m=function(t,e,n){var r=(t=t||{}).random||(t.rng||d)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=r[o];return e}return p(r)};const v=(g=[],{addProject:function(t){g.push(t)},updateProject:function(t,e){var n=g.find((function(e){return e.id===t}));n.name=e},removeProject:function(t){var e=g.findIndex((function(e){return e.id===t}));g.splice(e,1)}});var g;const y=(h=function(t){t.querySelector("i").addEventListener("click",(function(e){e.stopPropagation(),t.querySelector(".item__actions").classList.toggle("display-flex")})),window.addEventListener("click",(function(){t.querySelector(".item__actions").classList.remove("display-flex")}));var e=t.querySelector(".item__actions").children;Array.from(e).forEach((function(e){var n=e.classList;n.contains("btn-edit")&&e.addEventListener("click",(function(t){var e=t.target.parentNode.parentNode.querySelector(".item__content");function n(t){var e=t.target;!0!==i(t.target.value)&&(b.update(e.getAttribute("data-id"),e.value),e.disabled=!0)}e.disabled=!1,e.focus(),e.addEventListener("blur",(function(t){t.preventDefault(),n(t)})),e.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),n(t))}))})),n.contains("btn-delete")&&e.addEventListener("click",(function(e){var n,r=e.target.parentNode.parentNode.querySelector(".item__content");n=r.getAttribute("data-id"),b.remove(n),t.parentNode.removeChild(t)}))}))},{render:function(t){var e=document.querySelector(".nav__list"),n=document.createElement("li");n.setAttribute("class","nav__item"),n.innerHTML='\n      <input\n        class="item__content"\n        type="text"\n        name="projectName"\n        placeholder="'.concat(t.name,'"\n        data-id = "').concat(t.id,'"\n        disabled\n        />\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      <div class="item__actions">\n        <button type="button" class="btn btn-edit">edit</button>\n        <button type="button" class="btn btn-delete">delete</button>\n      </div>\n    '),e.appendChild(n),h(n)}});var h;const b={add:function(t){v.addProject(t),y.render(t)},update:function(t,e){v.updateProject(t,e)},remove:function(t){v.removeProject(t)}};var S,E,_;S=e,E=document.createElement("link"),_=document.getElementById("dynamic-favicon"),E.id="dynamic-favicon",E.rel="shortcut icon",E.href=S,_&&document.head.removeChild(_),document.head.appendChild(E),o(),function(){var t=document.getElementById("project-name");function e(){if(!0!==i(t.value)){var e,n=(e=t.value,{id:m(),name:e,setName:function(t){return e=t},todos:[]});b.add(n),t.value=""}}t.addEventListener("blur",(function(t){t.preventDefault(),e()})),t.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),e())}))}()})();