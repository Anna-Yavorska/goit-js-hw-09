var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("gXu43");const l=document.querySelector("body"),d=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");l.style.backgroundColor=(0,r.getRandomHexColor)(),d.addEventListener("click",(function(){i=setInterval((()=>{l.style.backgroundColor=(0,r.getRandomHexColor)(),d.disabled=!0}),1e3)})),a.addEventListener("click",(function(){clearInterval(i),d.disabled=!1}));let i=null;
//# sourceMappingURL=01-color-switcher.cad1bb84.js.map
