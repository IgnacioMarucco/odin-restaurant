/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer)
/* harmony export */ });
function footer() {
  const footer = document.createElement('footer');
  footer.textContent = 'Created by Ignacio Marucco';
  return footer;
}



/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/contact */ "./src/pages/contact.js");




function header() {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const btnHome = document.createElement('button');
  btnHome.classList.add('btn');
  btnHome.textContent = 'Home';
  const btnMenu = document.createElement('button');
  btnMenu.classList.add('btn');
  btnMenu.textContent = 'Menu';
  const btnContact = document.createElement('button');
  btnContact.classList.add('btn');
  btnContact.textContent = 'Contact';
  // Event Listeners
  btnHome.addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_0__.loadHome);
  btnMenu.addEventListener('click', _pages_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu);
  btnContact.addEventListener('click', _pages_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact);

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(btnHome);
  ul.appendChild(btnMenu);
  ul.appendChild(btnContact);

  return header;
}



/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
function createContact() {
  const contact = document.createElement('div');
  const contactTitle = document.createElement('h2');
  const contactText = document.createElement('p');

  contactTitle.textContent = 'Make your reservation now!';
  contactText.textContent = '+54 0351 9999-9999 or lamesadelupita@gmail.com';

  contact.appendChild(contactTitle);
  contact.appendChild(contactText);
  return contact;
}

function loadContact() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createContact());
}



/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadHome: () => (/* binding */ loadHome)
/* harmony export */ });
function createHome() {
  const hero = document.createElement('div');
  const heroTitle = document.createElement('h1');
  heroTitle.textContent = 'Welcome to LA MESA DE LUPITA';
  heroTitle.classList.add('headers');
  const heroText = document.createElement('p');
  heroText.textContent = 'Open for over 15 years, our restaurant near has built a strong reputation on big taste and bold flavors, earning it raves from locals and travelers alike.';

  hero.appendChild(heroTitle);
  hero.appendChild(heroText);

  return hero;
}

function loadHome() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createHome());
}



/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
function createMenu() {
  const menu = document.createElement('div');
  menu.appendChild(
    createMenuItem(
      "Greek Salad",
      "Sliced cucumbers, tomatoes, green bell pepper, red onion, olives and feta cheese.",
      30)
  );
  menu.appendChild(
    createMenuItem(
      "Yellow Split Pea Soup",
      "Yellow split peas, Yukon gold potato, Corn kernels, Cashew cream, Smoked paprika, Apple cider vinegar, Onion, garlic, and celery.",
      50)
  );
  return menu;
}

function createMenuItem(name, ingredients, price) {
  const menuItem = document.createElement('div');
  const menuTitle = document.createElement('h3');
  menuTitle.textContent = name;
  const menuBody = document.createElement('p');
  menuBody.textContent = ingredients;
  const menuPrice = document.createElement('p');
  menuPrice.textContent = price;

  menuItem.appendChild(menuTitle);
  menuItem.appendChild(menuBody);
  menuItem.appendChild(menuPrice);

  return menuItem;
}

function loadMenu() {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(createMenu());
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");




function initialize() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  document.body.appendChild(content);
  document.body.insertBefore((0,_components_header__WEBPACK_IMPORTED_MODULE_1__.header)(), content);
  document.body.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_2__.footer)())
  ;(0,_pages_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
}

initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKeUM7QUFDQTtBQUNNOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlEQUFRO0FBQzVDLG9DQUFvQyxpREFBUTtBQUM1Qyx1Q0FBdUMsdURBQVc7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDSztBQUNBOztBQUU3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsMERBQU07QUFDbkMsNEJBQTRCLDBEQUFNO0FBQ2xDLEVBQUUsc0RBQVE7QUFDVjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9ICdDcmVhdGVkIGJ5IElnbmFjaW8gTWFydWNjbyc7XG4gIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCB7IGZvb3RlciB9OyIsImltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4uL3BhZ2VzL2hvbWVcIjtcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4uL3BhZ2VzL21lbnVcIjtcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4uL3BhZ2VzL2NvbnRhY3RcIjtcblxuZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG5Ib21lLmNsYXNzTGlzdC5hZGQoJ2J0bicpO1xuICBidG5Ib21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bk1lbnUuY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIGJ0bk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuQ29udGFjdC5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgYnRuQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgLy8gRXZlbnQgTGlzdGVuZXJzXG4gIGJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG4gIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG4gIGJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdCk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHVsLmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuICB1bC5hcHBlbmRDaGlsZChidG5NZW51KTtcbiAgdWwuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdCk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgaGVhZGVyIH07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnTWFrZSB5b3VyIHJlc2VydmF0aW9uIG5vdyEnO1xuICBjb250YWN0VGV4dC50ZXh0Q29udGVudCA9ICcrNTQgMDM1MSA5OTk5LTk5OTkgb3IgbGFtZXNhZGVsdXBpdGFAZ21haWwuY29tJztcblxuICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RUaXRsZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRleHQpO1xuICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcbn1cblxuZXhwb3J0IHsgbG9hZENvbnRhY3QgfTsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGhlcm9UaXRsZS50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIExBIE1FU0EgREUgTFVQSVRBJztcbiAgaGVyb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcnMnKTtcbiAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ09wZW4gZm9yIG92ZXIgMTUgeWVhcnMsIG91ciByZXN0YXVyYW50IG5lYXIgaGFzIGJ1aWx0IGEgc3Ryb25nIHJlcHV0YXRpb24gb24gYmlnIHRhc3RlIGFuZCBib2xkIGZsYXZvcnMsIGVhcm5pbmcgaXQgcmF2ZXMgZnJvbSBsb2NhbHMgYW5kIHRyYXZlbGVycyBhbGlrZS4nO1xuXG4gIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RpdGxlKTtcbiAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG5cbiAgcmV0dXJuIGhlcm87XG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCB7IGxvYWRIb21lIH07IiwiZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJHcmVlayBTYWxhZFwiLFxuICAgICAgXCJTbGljZWQgY3VjdW1iZXJzLCB0b21hdG9lcywgZ3JlZW4gYmVsbCBwZXBwZXIsIHJlZCBvbmlvbiwgb2xpdmVzIGFuZCBmZXRhIGNoZWVzZS5cIixcbiAgICAgIDMwKVxuICApO1xuICBtZW51LmFwcGVuZENoaWxkKFxuICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgXCJZZWxsb3cgU3BsaXQgUGVhIFNvdXBcIixcbiAgICAgIFwiWWVsbG93IHNwbGl0IHBlYXMsIFl1a29uIGdvbGQgcG90YXRvLCBDb3JuIGtlcm5lbHMsIENhc2hldyBjcmVhbSwgU21va2VkIHBhcHJpa2EsIEFwcGxlIGNpZGVyIHZpbmVnYXIsIE9uaW9uLCBnYXJsaWMsIGFuZCBjZWxlcnkuXCIsXG4gICAgICA1MClcbiAgKTtcbiAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIGluZ3JlZGllbnRzLCBwcmljZSkge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb25zdCBtZW51Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbWVudUJvZHkudGV4dENvbnRlbnQgPSBpbmdyZWRpZW50cztcbiAgY29uc3QgbWVudVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZW51UHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51Qm9keSk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVQcmljZSk7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgeyBsb2FkTWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9wYWdlcy9ob21lXCI7XG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IHsgZm9vdGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGhlYWRlcigpLCBjb250ZW50KTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb290ZXIoKSlcbiAgbG9hZEhvbWUoKTtcbn1cblxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9