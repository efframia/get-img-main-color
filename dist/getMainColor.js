(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("canvas"));
	else if(typeof define === 'function' && define.amd)
		define(["canvas"], factory);
	else if(typeof exports === 'object')
		exports["getMainColor"] = factory(require("canvas"));
	else
		root["getMainColor"] = factory(root["canvas"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__2__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getAreaPixels = typeof window === "undefined" ? __webpack_require__(1) : __webpack_require__(3);
const getColor = __webpack_require__(4);

module.exports = async function(url, imgArea = {}) {
    const pixels = await getAreaPixels(url, imgArea);
    const res = getColor(pixels);
    return res;
};


/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { createCanvas, loadImage } = __webpack_require__(2);

function isNullObj(obj) {
    return !Object.keys(obj).length;
}

async function getAreaPixels(url, imgArea) {
    const img = await loadImage(url);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let pixels;
    if (isNullObj(imgArea)) {
        pixels = ctx.getImageData(0, 0, img.width, img.height);
    } else {
        pixels = ctx.getImageData(
            imgArea.x,
            imgArea.y,
            imgArea.width,
            imgArea.height
        );
    }
    return pixels.data;
}

module.exports = getAreaPixels;


/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ ((module) => {

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
    });
}

function isNullObj(obj) {
    return !Object.keys(obj).length;
}

async function getAreaPixels(url, imgArea) {
    const img = await loadImage(url);
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    let pixels;
    if (isNullObj(imgArea)) {
        pixels = ctx.getImageData(0, 0, img.width, img.height);
    } else {
        pixels = ctx.getImageData(
            imgArea.x,
            imgArea.y,
            imgArea.width,
            imgArea.height
        );
    }
    return pixels.data;
}

module.exports = getAreaPixels;


/***/ }),
/* 4 */
/***/ ((module) => {

function getColor(pixels) {
    let i = -4;
    let blockSize = 5;
    let count = 0;
    let rgb = {
        r: 0,
        g: 0,
        b: 0,
    };

    while ((i += blockSize * 4) < pixels.length) {
        ++count;
        rgb.r += pixels[i];
        rgb.g += pixels[i + 1];
        rgb.b += pixels[i + 2];
    }
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

module.exports = getColor;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});