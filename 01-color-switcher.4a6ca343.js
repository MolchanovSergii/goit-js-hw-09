const t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");let n=null;function o(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}e.addEventListener("click",(function(){return e.disabled=!0,n=setInterval(o,1e3),n})),a.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.style.backgroundColor="#fafafa"}));
//# sourceMappingURL=01-color-switcher.4a6ca343.js.map