var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");const r=document.querySelector("body"),l=document.querySelector(".form");function a(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function s(e){i.Notify.success(e)}function d(e){i.Notify.failure(e)}r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,l.addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:t,amount:n}=e.currentTarget.elements,i=Number(o.value),r=Number(t.value),u=Number(n.value);for(let e=1;e<=u;e+=1)1===e?a(e,i).then((({position:e,delay:o})=>{s(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{d(`Rejected promise ${e} in ${o}ms`)})):a(e,i+r*(e-1)).then((({position:e,delay:o})=>{s(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{d(`Rejected promise ${e} in ${o}ms`)})),l.reset()}));
//# sourceMappingURL=03-promises.a87b3288.js.map