const t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");t.style.backgroundColor=r(),e.addEventListener("click",(function(){o=setInterval((()=>{t.style.backgroundColor=r(),e.disabled=!0}),1e3)})),n.addEventListener("click",(function(){clearInterval(o),e.disabled=!1}));let o=null;function r(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.9e0d895c.js.map