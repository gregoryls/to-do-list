/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/elementCreate.js":
/*!******************************!*\
  !*** ./src/elementCreate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInputElement": () => (/* binding */ createInputElement),
/* harmony export */   "default": () => (/* binding */ createElementWithId),
/* harmony export */   "importImage": () => (/* binding */ importImage)
/* harmony export */ });
function createElementWithId(element, id) {
  const elem = document.createElement(element);
  if (id === undefined) return elem;
  elem.id = id;
  return elem;
}

function importImage(source) {
  const img = new Image();
  img.src = source;
  return img;
}

function createInputElement(type, name, id) {
  const elem = document.createElement("input");
  elem.type = type;
  elem.name = name;
  elem.id = id;
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
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contentCreation)
/* harmony export */ });
/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate */ "./src/elementCreate.js");


function taskModalDOM() {
  const modal = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "taskModal");
  const form = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("form", "taskForm");
  const nameInput = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createInputElement)("text", "nameInput", "nameInput");

  console.log((0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createInputElement)("text", "nameInput", "nameInput"));

  form.append(nameInput);

  modal.append(form);
  return modal;
}

function contentDOM() {
  const content = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("section", "taskContent");

  const taskLabels = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "labels");
  const taskName = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__["default"])("p");
  taskName.textContent = "test label";

  taskLabels.append(taskName);

  content.append(taskModalDOM(), taskLabels);

  return content;
}

function contentCreation() {
  return contentDOM();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEU7QUFDMUU7QUFDQTtBQUNBLGdCQUFnQiwwREFBbUI7QUFDbkMsZUFBZSwwREFBbUI7QUFDbEMsb0JBQW9CLGtFQUFrQjtBQUN0QztBQUNBLGNBQWMsa0VBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQW1CO0FBQ3JDO0FBQ0EscUJBQXFCLDBEQUFtQjtBQUN4QyxtQkFBbUIsMERBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWxlbWVudENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0SW1hZ2Uoc291cmNlKSB7XHJcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgaW1nLnNyYyA9IHNvdXJjZTtcclxuICByZXR1cm4gaW1nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXRFbGVtZW50KHR5cGUsIG5hbWUsIGlkKSB7XHJcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBlbGVtLnR5cGUgPSB0eXBlO1xyXG4gIGVsZW0ubmFtZSA9IG5hbWU7XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnRXaXRoSWQsIHsgY3JlYXRlSW5wdXRFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudENyZWF0ZVwiO1xyXG5cclxuZnVuY3Rpb24gdGFza01vZGFsRE9NKCkge1xyXG4gIGNvbnN0IG1vZGFsID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBcInRhc2tNb2RhbFwiKTtcclxuICBjb25zdCBmb3JtID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImZvcm1cIiwgXCJ0YXNrRm9ybVwiKTtcclxuICBjb25zdCBuYW1lSW5wdXQgPSBjcmVhdGVJbnB1dEVsZW1lbnQoXCJ0ZXh0XCIsIFwibmFtZUlucHV0XCIsIFwibmFtZUlucHV0XCIpO1xyXG5cclxuICBjb25zb2xlLmxvZyhjcmVhdGVJbnB1dEVsZW1lbnQoXCJ0ZXh0XCIsIFwibmFtZUlucHV0XCIsIFwibmFtZUlucHV0XCIpKTtcclxuXHJcbiAgZm9ybS5hcHBlbmQobmFtZUlucHV0KTtcclxuXHJcbiAgbW9kYWwuYXBwZW5kKGZvcm0pO1xyXG4gIHJldHVybiBtb2RhbDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGVudERPTSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhJZChcInNlY3Rpb25cIiwgXCJ0YXNrQ29udGVudFwiKTtcclxuXHJcbiAgY29uc3QgdGFza0xhYmVscyA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgXCJsYWJlbHNcIik7XHJcbiAgY29uc3QgdGFza05hbWUgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwicFwiKTtcclxuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IFwidGVzdCBsYWJlbFwiO1xyXG5cclxuICB0YXNrTGFiZWxzLmFwcGVuZCh0YXNrTmFtZSk7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kKHRhc2tNb2RhbERPTSgpLCB0YXNrTGFiZWxzKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRlbnRDcmVhdGlvbigpIHtcclxuICByZXR1cm4gY29udGVudERPTSgpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==