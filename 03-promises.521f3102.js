!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var i=o("6JpON");function a(e,n){var t={position:e,delay:n};return new Promise((function(e,r){var o=Math.random()>.3;setTimeout((function(){o&&e(t),r(t)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();for(var t=1e3*Number(n.target.delay.value),r=1e3*Number(n.target.step.value),o=Number(n.target.amount.value),u=1;u<=o;u+=1)a(u,t).then((function(n){var t=n.i,r=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(r,"ms"))})).catch((function(n){var t=n.i,r=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(r,"ms"))})),t+=r}))}();
//# sourceMappingURL=03-promises.521f3102.js.map
