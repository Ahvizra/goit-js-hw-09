parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.galleryRef=void 0;const e=document.querySelector(".gallery");exports.galleryRef=e;const t=document.querySelector(".lightbox"),o=document.querySelector(".lightbox__button"),c=document.querySelector(".lightbox__image"),n=document.querySelector(".lightbox__overlay");function r(e){e.target.dataset.source&&(e.preventDefault(),c.src=e.target.dataset.source,t.classList.add("is-open"),document.addEventListener("keydown",i))}function s(e){c.src="",t.classList.remove("is-open"),document.removeEventListener("keydown",i)}function i(e){"Escape"===e.code&&t.classList.contains("is-open")&&s()}e.addEventListener("click",r),o.addEventListener("click",s),n.addEventListener("click",s);
},{}]},{},["A2T1"], null)
//# sourceMappingURL=/goit-js-hw-09/app.f45e1490.js.map