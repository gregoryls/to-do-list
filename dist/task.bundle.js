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
/* harmony export */   "createElementWithClass": () => (/* binding */ createElementWithClass),
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

// 'class' is not allowed as a parameter name
function createElementWithClass(element, inputClass) {
  const elem = document.createElement(element);
  elem.classList.add(inputClass);
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

  return elem;
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
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "generateTaskDOM": () => (/* binding */ generateTaskDOM),
/* harmony export */   "getUserTaskInput": () => (/* binding */ getUserTaskInput)
/* harmony export */ });
/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate */ "./src/elementCreate.js");


function createTask(name, description, dueDate, priority) {
  return { name, description, dueDate, priority };
}

function getUserTaskInput() {
  const name = document.getElementById("taskName").value;
  console.log(name);
  const description = document.getElementById("taskDescription").value;
  const dueDate = document.getElementById("taskDueDate").value.split("T");
  const priority = document.getElementById("taskPriority").value;

  return { name, description, dueDate, priority };
}

function generateTaskDOM(taskObject) {
  const allTaskElements = document.getElementById("tasks");

  const taskWrapper = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("div", "taskWrapper");

  const taskName = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskName");
  taskName.textContent = taskObject.name;
  const taskDescription = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskDescription");
  taskDescription.textContent = taskObject.description;
  const taskDueDate = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskDueDate");
  taskDueDate.textContent = taskObject.dueDate;
  const taskPriority = (0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)("p", "taskPriority");
  taskPriority.textContent = taskObject.priority;

  taskWrapper.append(taskName, taskDescription, taskDueDate, taskPriority);

  allTaskElements.appendChild(taskWrapper);
}
// TODO project logic
// TODO look into date formats
// TD have a color indicator to go with priority, red yellow green for instance

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUQ7QUFDekQ7QUFDTztBQUNQLFdBQVc7QUFDWDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLHNCQUFzQixzRUFBc0I7QUFDNUM7QUFDQSxtQkFBbUIsc0VBQXNCO0FBQ3pDO0FBQ0EsMEJBQTBCLHNFQUFzQjtBQUNoRDtBQUNBLHNCQUFzQixzRUFBc0I7QUFDNUM7QUFDQSx1QkFBdUIsc0VBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZWxlbWVudENyZWF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSWQoZWxlbWVudCwgaWQpIHtcclxuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcclxuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGVsZW07XHJcbiAgZWxlbS5pZCA9IGlkO1xyXG4gIHJldHVybiBlbGVtO1xyXG59XHJcblxyXG4vLyAnY2xhc3MnIGlzIG5vdCBhbGxvd2VkIGFzIGEgcGFyYW1ldGVyIG5hbWVcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoZWxlbWVudCwgaW5wdXRDbGFzcykge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xyXG4gIGVsZW0uY2xhc3NMaXN0LmFkZChpbnB1dENsYXNzKTtcclxuICByZXR1cm4gZWxlbTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltcG9ydEltYWdlKHNvdXJjZSkge1xyXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gIGltZy5zcmMgPSBzb3VyY2U7XHJcbiAgcmV0dXJuIGltZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0RWxlbWVudCh0eXBlLCBuYW1lLCBpZCkge1xyXG4gIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZWxlbS50eXBlID0gdHlwZTtcclxuICBlbGVtLm5hbWUgPSBuYW1lO1xyXG4gIGVsZW0uaWQgPSBpZDtcclxuXHJcbiAgcmV0dXJuIGVsZW07XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aENsYXNzIH0gZnJvbSBcIi4vZWxlbWVudENyZWF0ZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVGFza0lucHV0KCkge1xyXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tOYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0R1ZURhdGVcIikudmFsdWUuc3BsaXQoXCJUXCIpO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIikudmFsdWU7XHJcblxyXG4gIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVUYXNrRE9NKHRhc2tPYmplY3QpIHtcclxuICBjb25zdCBhbGxUYXNrRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tzXCIpO1xyXG5cclxuICBjb25zdCB0YXNrV3JhcHBlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJkaXZcIiwgXCJ0YXNrV3JhcHBlclwiKTtcclxuXHJcbiAgY29uc3QgdGFza05hbWUgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRhc2tOYW1lXCIpO1xyXG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFza09iamVjdC5uYW1lO1xyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJwXCIsIFwidGFza0Rlc2NyaXB0aW9uXCIpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XHJcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKFwicFwiLCBcInRhc2tEdWVEYXRlXCIpO1xyXG4gIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC5kdWVEYXRlO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoXCJwXCIsIFwidGFza1ByaW9yaXR5XCIpO1xyXG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QucHJpb3JpdHk7XHJcblxyXG4gIHRhc2tXcmFwcGVyLmFwcGVuZCh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza1ByaW9yaXR5KTtcclxuXHJcbiAgYWxsVGFza0VsZW1lbnRzLmFwcGVuZENoaWxkKHRhc2tXcmFwcGVyKTtcclxufVxyXG4vLyBUT0RPIHByb2plY3QgbG9naWNcclxuLy8gVE9ETyBsb29rIGludG8gZGF0ZSBmb3JtYXRzXHJcbi8vIFREIGhhdmUgYSBjb2xvciBpbmRpY2F0b3IgdG8gZ28gd2l0aCBwcmlvcml0eSwgcmVkIHllbGxvdyBncmVlbiBmb3IgaW5zdGFuY2VcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9