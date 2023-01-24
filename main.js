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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpage */ \"./src/webpage.js\");\n\n\n(0,_webpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst content = document.getElementById('content');\nconst homePage = document.createElement('div');\nhomePage.setAttribute('id', 'home');\nconst headerText = ['Home', 'Menu', 'About', 'Contact'];\n\nfunction homeElements() {\n\t// Header elements being created and appended to one another\n\tconst header = document.createElement('header');\n\theader.setAttribute('id', 'header');\n\tconst nav = document.createElement('nav');\n\tconst ul = document.createElement('ul');\n\n\t// Adding headerText values to <li> and <a>\n\tfor (const text of headerText) {\n\t\tconst li = document.createElement('li');\n\t\tconst anchor = document.createElement('a');\n\t\tanchor.classList.add('nav-link');\n\t\tli.textContent = text;\n\t\tanchor.href = `#${text}`;\n\n\t\tli.appendChild(anchor);\n\t\tul.appendChild(li);\n\t}\n\n\t// Main elements being created and appended to one another\n\tconst main = document.createElement('main');\n\tmain.setAttribute('id', 'main');\n\tconst img = document.createElement('img');\n\timg.classList.add('main-img');\n\timg.setAttribute('src', '/dist/imgs/sandwich.jpg');\n\timg.setAttribute('alt', 'A sandwich being held');\n\tconst h1 = document.createElement('h1');\n\th1.setAttribute('id', 'main-heading');\n\th1.textContent = 'Food Is Mood';\n\tconst p1 = document.createElement('p');\n\tp1.classList.add('main-text');\n\tp1.textContent =\n\t\t'At Food Is Mood, we believe that street food and good health can coexist. We specialize in making delicious and nutritious street food that is perfect for people who are trying to lose weight. Our menu is carefully crafted to include a variety of nutrient-dense, whole foods that will nourish your body and satisfy your taste buds.';\n\tconst p2 = document.createElement('p');\n\tp2.classList.add('main-text');\n\tp2.textContent =\n\t\t\"We source only the freshest, locally-sourced ingredients and prepare them in ways that retain the maximum amount of nutrients. Whether you're looking for a quick snack or a hearty meal, our menu has something for everyone.\";\n\tconst p3 = document.createElement('p');\n\tp3.classList.add('main-text');\n\tp3.textContent =\n\t\t\"We are committed to providing delicious and healthy options for our customers. Come find us on the street, and enjoy a meal that will make you feel great about what you're eating. All of our dishes are clearly labeled with calorie, protein, fat, and carbohydrate information.\";\n\n\t// Footer elements being created and appended to one another\n\tconst footer = document.createElement('footer');\n\tfooter.setAttribute('id', 'footer');\n\tconst socialsContainer = document.createElement('div');\n\tsocialsContainer.classList.add('social-media');\n\tconst socialsHeading = document.createElement('h2');\n\tsocialsHeading.setAttribute('id', 'social-heading');\n\tsocialsHeading.textContent = 'Social Media';\n\tconst facebookAnchor = document.createElement('a');\n\tfacebookAnchor.classList.add('social-link');\n\tfacebookAnchor.href = 'https://www.facebook.com/foodismood';\n\tconst facebookFA = document.createElement('i');\n\tfacebookFA.innerHTML = '<i class=\"fa-brands fa-facebook\"></i>';\n\tconst twitterAnchor = document.createElement('a');\n\ttwitterAnchor.classList.add('social-link');\n\ttwitterAnchor.href = 'https://www.twitter.com/foodismood';\n\tconst twitterFA = document.createElement('i');\n\ttwitterFA.innerHTML = '<i class=\"fa-brands fa-twitter\"></i>';\n\tconst instagramAnchor = document.createElement('a');\n\tinstagramAnchor.classList.add('social-link');\n\tinstagramAnchor.href = 'https://www.instagram.com/foodismood';\n\tconst instagramFA = document.createElement('i');\n\tinstagramFA.innerHTML = '<i class=\"fa-brands fa-instagram\"></i>';\n\tconst scheduleContainer = document.createElement('div');\n\tscheduleContainer.classList.add('schedule');\n\tconst scheduleHeading = document.createElement('h2');\n\tscheduleHeading.setAttribute('id', 'schedule-heading');\n\tscheduleHeading.textContent = 'Schedule';\n\tconst scheduleText = document.createElement('p');\n\tscheduleText.classList.add('schedule-text');\n\tscheduleText.textContent =\n\t\t'Check out our website or social media for our weekly schedule';\n\tconst copyrightText = document.createElement('p');\n\tcopyrightText.classList.add('copyright-text');\n\tcopyrightText.textContent = 'All rights reserved Food Is Mood &copy;2023';\n\n\tfacebookAnchor.appendChild(facebookFA);\n\ttwitterAnchor.appendChild(twitterFA);\n\tinstagramAnchor.appendChild(instagramFA);\n\n\tsocialsContainer.appendChild(socialsHeading);\n\tsocialsContainer.appendChild(facebookAnchor);\n\tsocialsContainer.appendChild(twitterAnchor);\n\tsocialsContainer.appendChild(instagramAnchor);\n\n\tscheduleContainer.appendChild(scheduleHeading);\n\tscheduleContainer.appendChild(scheduleText);\n\n\t// Append to div with id of \"homePage\" - header\n\thomePage.appendChild(header);\n\theader.appendChild(nav);\n\tnav.appendChild(ul);\n\n\t// Append to div with id of \"homePage\" - main\n\thomePage.appendChild(main);\n\tmain.appendChild(img);\n\tmain.appendChild(h1);\n\tmain.appendChild(p1);\n\tmain.appendChild(p2);\n\tmain.appendChild(p3);\n\n\t// Append to div with id of \"homePage\" - footer\n\thomePage.appendChild(footer);\n\tfooter.appendChild(socialsContainer);\n\tfooter.appendChild(scheduleContainer);\n\tfooter.appendChild(copyrightText);\n\n\tcontent.appendChild(homePage);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeElements);\n\n\n//# sourceURL=webpack://restaurant-page/./src/webpage.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;