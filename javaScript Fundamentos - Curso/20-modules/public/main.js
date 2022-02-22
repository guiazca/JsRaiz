/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/HelloWorld.js":
/*!*************************************!*\
  !*** ./js/components/HelloWorld.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (name => {\n    return ` \n        <h1> Olá Mundo! Tudo bem?</h1>\n        <h2> Você está no ${name}</h2>\n        <hr />\n    `\n});\n\n\n//# sourceURL=webpack://20-modulos/./js/components/HelloWorld.js?");

/***/ }),

/***/ "./js/components/index.js":
/*!********************************!*\
  !*** ./js/components/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HelloWorld\": () => (/* reexport safe */ _HelloWorld__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"List\": () => (/* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _HelloWorld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelloWorld */ \"./js/components/HelloWorld.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./js/components/list.js\");\n\n\n\n\n//# sourceURL=webpack://20-modulos/./js/components/index.js?");

/***/ }),

/***/ "./js/components/list.js":
/*!*******************************!*\
  !*** ./js/components/list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data => (\n    ` \n    <ul>\n        ${data.map(pessoa => `<li>${pessoa.nome} - ${pessoa.idade}</li> `).join('')}\n    </ul>\n    `\n));\n\n\n//# sourceURL=webpack://20-modulos/./js/components/list.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ */ \"./js/components/index.js\");\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/utils */ \"./js/modules/utils.js\");\n/* harmony import */ var _js_mock_pessoas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/mock/pessoas */ \"./js/mock/pessoas.js\");\n\n\n\n\n\n// console.log('eDeMaior', eMaioridade(10))\n// console.log('eDeMaior', eMaioridade(20))\n\n// console.log(agrupaPorMaiorEMenor(pessoasMock))\n\nconst {maiores, menores} = (0,_modules_utils__WEBPACK_IMPORTED_MODULE_1__.agrupaPorMaiorEMenor)(_js_mock_pessoas__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\nconst html = `${(0,_components___WEBPACK_IMPORTED_MODULE_0__.HelloWorld)('Programador a Bordo')}\n    <h3>Maiores</h3>\n    ${(0,_components___WEBPACK_IMPORTED_MODULE_0__.List)(maiores)}\n    <h3>Menores</h3>\n    ${(0,_components___WEBPACK_IMPORTED_MODULE_0__.List)(menores)}\n`\n\ndocument.querySelector('#app').innerHTML = html\n\n\n//# sourceURL=webpack://20-modulos/./js/main.js?");

/***/ }),

/***/ "./js/mock/pessoas.js":
/*!****************************!*\
  !*** ./js/mock/pessoas.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pessoas = [\n    {\n        nome: 'Ayrton',\n        idade: 27\n    },\n    {\n        nome: \"João\",\n        idade: 14\n    },\n    {\n        nome: \"Maria\",\n        idade: 23\n    },\n    {\n        nome: 'Joana',\n        idade: 21\n    },\n    {\n        nome: \"Lucas\",\n        idade: 32\n    },\n    {\n        nome: \"Mateus\",\n        idade: 15\n    },\n    {\n        nome: \"Isa\",\n        idade: 23\n    },\n    {\n        nome: \"Luiza\",\n        idade: 17\n    }\n]\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pessoas);\n\n\n//# sourceURL=webpack://20-modulos/./js/mock/pessoas.js?");

/***/ }),

/***/ "./js/modules/utils.js":
/*!*****************************!*\
  !*** ./js/modules/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eDeMaior\": () => (/* binding */ eDeMaior),\n/* harmony export */   \"agrupaPorMaiorEMenor\": () => (/* binding */ agrupaPorMaiorEMenor)\n/* harmony export */ });\nconst eDeMaior = idade => idade >= 18\n\nconst agrupaPorMaiorEMenor = pessoas => ( \n pessoas.reduce(function(valorAcumulador, valorArray){\n    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';\n    valorAcumulador[propMaiorOuMenor].push(valorArray)\n    return valorAcumulador\n}, {maiores:[], menores:[]})\n)\n \n\n//# sourceURL=webpack://20-modulos/./js/modules/utils.js?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;